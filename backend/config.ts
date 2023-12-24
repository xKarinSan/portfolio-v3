import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

const notionClient = new Client({
    auth: process.env.NOTION_TOKEN,
});
export { notionClient };
