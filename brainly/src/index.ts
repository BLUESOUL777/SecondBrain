import express, { Request, Response } from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { UserModel, ContentModel, LinkModel } from "./db";
import bcrypt from "bcrypt";
import { JWT_SECRET, MONGO_URL } from "./config";
import { userMiddleware } from "./middleware";
import { random } from "./utils";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGO_URL!)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

if (!JWT_SECRET) {
    throw new Error("Missing required environment variables in .env file");
}

app.post("/api/v1/signup", async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashPass = await bcrypt.hash(password, 10);
        await UserModel.create({
            username: username,
            password: hashPass
        });
        res.status(201).json({
            message: `You have signed up successfully.`
        });
    } catch (error) {
        console.log(`Error during signup {error}`);
        res.status(500).json({
            message: `Signup has Failed plz try later`
        })
    }
});

app.post("/api/v1/signin", async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const existingUser = await UserModel.findOne({ username });

        if (!existingUser) {
            return res.status(400).json({
                message: "Wrong Username"
            });
        }

        const result = await bcrypt.compare(password, existingUser.password);
        if (result) {
            const token = jwt.sign(
                { id: existingUser._id },
                //@ts-ignore
                JWT_SECRET
            );

            return res.status(200).json({ token });
        } else {
            return res.status(401).json({
                message: "Incorrect Credentials"
            });
        }
    } catch (error) {
        console.error("Signin Error:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
});

app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const title = req.body.title;
    const link = req.body.link;

    await ContentModel.create({
        title,
        link,
        tags: [],
        userId: req.userId
    })

    res.json({ message: "Content created successfully" });
}); //tags array check

app.put("/api/v1/content/:id", userMiddleware, async (req, res) => {
    const { link, title, tags } = req.body;
    const contentId = req.params.id;

    const existingContent = await ContentModel.findOne({
        _id: contentId,
        userId: req.userId
    });

    if (!existingContent) {
        return res.status(404).json({
            message: "Content not found or not authorized"
        });
    }

    const updatedContent = await ContentModel.findByIdAndUpdate(
        contentId,
        { title, link, tags },
        { new: true }
    );

    return res.json({
        message: "Content has been Updated",
        content: updatedContent
    });
});//tags array check

app.get("/api/v1/content/:id", userMiddleware, async (req, res) => {
    const contentId = req.params.id;

    const content = await ContentModel.findOne({
        _id: contentId
    }).populate("userId", "username");

    if (!content) {
        return res.status(404).json({
            message: `Sorry no such Content Found`
        });
    } else {
        return res.json({
            content
        });
    }
});

app.delete("/api/v1/content/:id", userMiddleware, async (req, res) => {
    const contentId = req.params.id;
    if (!contentId) {
        return res.status(404).json({
            message: `Sorry no such Content Found`
        });
    }

    const deletedContent = await ContentModel.findOneAndDelete({
        _id: contentId
    });

    if (!deletedContent) {
        return res.status(404).json({
            message: `Content not found`
        });
    }

    return res.status(200).json({
        message: `The content has been deleted successfully`
    });
});

app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
    const share = req.body.share;
    if (share) {
        const existingLink = await LinkModel.findOne({
            userId: req.userId
        })

        if (existingLink) {
            return (
                res.json({
                    existingLink
                })
            )
        }

        await LinkModel.create({
            userId: req.userId,
            hash: random(10)
        })
    } else {
        await LinkModel.deleteOne({
            userId: req.userId
        })
    }

    return ({
        message: `The Link has Been Updated`
    })
})

app.get("/api/v1/brain/:sharelink", async (req, res) => {
    const linkId = req.params.sharelink;
    const link = await LinkModel.findOne({
        linkId
    });
    if (!link) {
        return (
            res.status(404).json({
                message: `Sorry No Such Content Found`
            })
        )
    }

    const content = await ContentModel.findOne({
        userId: link.userId
    })

    const user = await UserModel.findOne({
        _id: link.userId
    })

    if (!user) {
        return (
            res.status(404).json({
                message: `No Such User found.`
            })
        )
    }

    return (
        res.json({
            user: user.username,
            content
        })
    )
})

app.listen(3000);