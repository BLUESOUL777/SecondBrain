import express, { Request, Response, NextFunction } from "express";
import { JWT_SECRET } from "./config";
import jwt from "jsonwebtoken"

if (!JWT_SECRET) {
    throw new Error("Missing required environment variables in .env file");
  }
  

declare global {
    namespace Express {
        interface Request {
            userId?: string;
        }
    }
}

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    //@ts-ignore
    const decoded = jwt.verify(header as string, JWT_SECRET)
    if (decoded) {
        //@ts-ignore
        req.userId = typeof decoded === 'object' ? decoded.id : undefined;
        next()
    } else {
        return res.status(403).json({
            message: `Signin Failed`
        })
    }
}