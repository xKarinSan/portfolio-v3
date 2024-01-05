// ======================= imports =======================
// =========== types ===========
// import Project from "./types/ProjectType";
// =========== express & cors ===========
import express, { Application, Router, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import corsMiddleware from "./middleware/corsMiddleware";
import serverless from 'serverless-http';

// =========== notion related ===========
import getDatabase from "./databaseHelpers/general/getDatabase";
import getProjects from "./databaseHelpers/projects/getProjects";
import getExperiences from "./databaseHelpers/experiences/getExperiences";
import getSkills from "./databaseHelpers/skills/getSkills";

dotenv.config();

// ======================= setup =======================
const app: Application = express();
var router: Router = require("express").Router();
const port: number = 3000;

// use middleware before using router
app.use(corsMiddleware);
app.use(router);
app.use(cors());
app.use(express.json());

// ======================= routes =======================
router.get("/", function (req: Request, res: Response): void {
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
            const data = await getProjects();
            res.send(data);
        } catch {
            res.status(500).send({
                message: "Internal Server Error",
            });
        }
    }
);

router.get(
    "/experiences",
    async function (req: Request, res: Response): Promise<void> {
        try {
            const data = await getExperiences();
            res.send(data);
        } catch {
            res.status(500).send({
                message: "Internal Server Error",
            });
        }
    }
);

router.get(
    "/skills",
    async function (req: Request, res: Response): Promise<void> {
        try {
            const data = await getSkills();
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


export const handler = serverless(app);
