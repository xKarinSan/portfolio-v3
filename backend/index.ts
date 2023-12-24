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
    const getProjects = await getDatabase(process.env.NOTION_DATABASE)
    const results = getAllDatabaseRows(getProjects);
    console.log("results", results);

    res.send("Hello world");
});

app.listen(port, () => {
    console.log(`Server Running here 👉 http://localhost:${port}`);
});
