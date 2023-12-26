import getAllDatabaseRows from "../general/getAllDatabaseRows";
import getDatabase from "../general/getDatabase";

export default async function getExperiences() {
    try {
        // get the database
        let data = [];
        const experiences = await getDatabase(
            process.env.NOTION_DATABASE_EXPERIENCES
        );
        // get the experiences
        data = getAllDatabaseRows(experiences);
        return data;
    } catch {
        return [];
    }
}
