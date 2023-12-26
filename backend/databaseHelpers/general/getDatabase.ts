import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { notionClient } from "../../config";
export default async function getDatabase(
    database_id: any
): Promise<QueryDatabaseResponse | null> {
    try {
        const databaseInstance: QueryDatabaseResponse =
            await notionClient.databases.query({
                database_id,
            });
        return databaseInstance;
    } catch {
        return null;
    }
}
