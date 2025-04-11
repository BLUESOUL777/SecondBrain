import dotenv from "dotenv";
dotenv.config();

if (!process.env.JWT_SECRET || !process.env.MONGO_URL) {
    throw new Error("Missing required environment variables in .env file");
}

export const JWT_SECRET = process.env.JWT_SECRET;
export const MONGO_URL = process.env.MONGO_URL;