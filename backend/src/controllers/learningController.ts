import { Request, Response } from "express";
import { generateLearningContent } from "../services/generateContent";

export const getLearningContent = (req: Request, res: Response) => {
  const moduleCount = 15;
  const eventCount = 15;

  const learningContent = generateLearningContent(moduleCount, eventCount);

  const { type, status, moduleType, sort, page = 1, limit = 10 } = req.query;

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

  if (sort) {
    filteredContent = filteredContent.sort((a, b) => {
      if (sort === "name") {
        return a.data.name.localeCompare(b.data.name);
      } else if (sort === "createdAt") {
        return (
          new Date(a.data.createdAt).getTime() -
          new Date(b.data.createdAt).getTime()
        );
      }
      return 0;
    });
  }

  const startIndex = (Number(page) - 1) * Number(limit);
  const endIndex = startIndex + Number(limit);
  const paginatedContent = filteredContent.slice(startIndex, endIndex);

  res.json({
    total: filteredContent.length,
    page: Number(page),
    limit: Number(limit),
    items: paginatedContent,
  });
};
