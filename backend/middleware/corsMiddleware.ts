import { Express, Request, Response, NextFunction } from "express";
export default function corsMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
): void {
    res.set("Access-Control-Allow-Origin", "*");
    console.log("LOL")
    next();
}
