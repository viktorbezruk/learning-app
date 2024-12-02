import { Request, Response, NextFunction } from "express";
import { createClient } from "redis";
import { generateLearningContent } from "../services/generateContent";
import { LearningModel } from "../types/learningTypes";
import { EVENT_COUNT, MODULE_COUNT } from "../constants/contentsCounts";
import { logger } from "../utils/logger";

const redisClient = createClient();

redisClient.connect().catch(console.error);

export const getLearningContent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    logger.info("Request received for getLearningContent", {
      endpoint: req.originalUrl,
      method: req.method,
      time: new Date().toISOString(),
    });

    const cachedData = await redisClient.get("learningContent");

    let learningContent: LearningModel[];

    if (cachedData) {
      learningContent = JSON.parse(cachedData);
    } else {
      learningContent = generateLearningContent(MODULE_COUNT, EVENT_COUNT);

      await redisClient.set(
        "learningContent",
        JSON.stringify(learningContent),
        {
          EX: 86400,
        }
      );
    }

    const {
      type,
      status,
      moduleType,
      search,
      page = 1,
      limit = 10,
    } = req.query;

    let filteredContent = learningContent;

    if (type) {
      filteredContent = filteredContent.filter((item) => item.type === type);
    }

    if (status) {
      filteredContent = filteredContent.filter(
        (item) => item.context.status === status
      );
    }

    if (moduleType) {
      filteredContent = filteredContent.filter(
        (item) => item.type === "module" && item.data.moduleType === moduleType
      );
    }

    if (search) {
      const searchLower = String(search).toLowerCase();
      logger.info("Filtering content by search term", {
        searchTerm: searchLower,
      });

      filteredContent = filteredContent.filter((item) =>
        item.data.name.toLowerCase().includes(searchLower)
      );
    }

    const startIndex = (Number(page) - 1) * Number(limit);
    const endIndex = startIndex + Number(limit);
    const paginatedContent = filteredContent.slice(startIndex, endIndex);

    res.success({
      total: filteredContent.length,
      page: Number(page),
      limit: Number(limit),
      items: paginatedContent,
    });
  } catch (error) {
    logger.error("Error fetching learning content", {
      error: (error as Error).message,
    });
    res.badRequest((error as Error).message);
  }
};
