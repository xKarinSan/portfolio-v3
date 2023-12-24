import express, { Application, Router, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import getDatabase from "./database/getDatabase";
import getAllDatabaseRows from "./database/getAllDatabaseRows";

dotenv.config();

const app: Application = express();
var router: Router = require("express").Router();
const port: number = 3000;
app.use(router);
app.use(cors());
app.use(express.json());

router.get("/", function (req: Request, res: Response): void {
    try {
        res.set("Access-Control-Allow-Origin", "*");

        res.send({ message: "Hello world" });
    } catch {
        console.log("GG");
        res.status(500).send({
            message: "Internal Server Error",
        });
    }
});

router.get(
    "/projects",
    async function (req: Request, res: Response): Promise<any> {
        try {
            res.set("Access-Control-Allow-Origin", "*");

            const getProjects = await getDatabase(
                process.env.NOTION_DATABASE_PROJECTS
            );
            const data = getAllDatabaseRows(getProjects);
            res.send(data);
        } catch {
            console.log("GG");
            res.status(500).send({
                message: "Internal Server Error",
            });
        }
    }
);
app.listen(port, () => {
    console.log(`Server Running here 👉 http://localhost:${port}`);
});
