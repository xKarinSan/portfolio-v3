import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import extractProperty from "./extractProperty";

// gets all the database rows and returns them as an array of objects
export default function getAllDatabaseRows(
    databaseResults: QueryDatabaseResponse | null
) {
    try {
        let res: any[] = [];
        databaseResults?.results.forEach((result: any) => {
            let newRow: { [key: string]: any } = {};
            const { id, properties: row } = result;
            newRow.id = id;
            Object.keys(row).map((key) => {
                newRow[key] = extractProperty(row[key]);
            });
            res.push(newRow);
        });
        return res;
    } catch {
        return [];
    }
}
