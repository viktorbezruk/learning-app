import { Request, Response, NextFunction } from "express";

declare module "express-serve-static-core" {
  interface Response {
    success: (data: any) => void;
    badRequest: (message: string) => void;
  }
}

export const responseMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.success = (data) => {
    res.status(200).json({
      status: 200,
      success: true,
      data,
    });
  };

  res.badRequest = (message) => {
    res.status(400).json({
      status: 400,
      success: false,
      message,
    });
  };

  next();
};
