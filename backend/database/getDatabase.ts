import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { notionClient } from "../config";
export default async function getDatabase(database_id: any) {
    try {
        const databaseInstance: QueryDatabaseResponse =
            await notionClient.databases.query({
                database_id,
                // database_id: `${process.env.NOTION_DATABASE}`,
            });
        return databaseInstance;
    } catch {
        return null;
    }
}
