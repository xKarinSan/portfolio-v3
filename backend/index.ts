import express, { Application, Router, Request, Response } from "express";
import dotenv from "dotenv";
import getDatabase from "./database/getDatabase";
import getAllDatabaseRows from "./database/getAllDatabaseRows";

dotenv.config();

const app: Application = express();
var router: Router = require("express").Router();
const port: number = 3000;
app.use(router);

router.get("/", async function (req: Request, res: Response): Promise<void> {
    try {
        res.send({ message: "Hello world" });
    } catch {
        res.status(500).send({
            message: "Internal Server Error",
        });
    }
});

router.get(
    "/projects",
    async function (req: Request, res: Response): Promise<void> {
        try {
            const getProjects = await getDatabase(
                process.env.NOTION_DATABASE_PROJECTS
            );
            const data = getAllDatabaseRows(getProjects);
            res.send(data);
        } catch {
            res.status(500).send({
                message: "Internal Server Error",
            });
        }
    }
);
app.listen(port, () => {
    console.log(`Server Running here 👉 http://localhost:${port}`);
});
