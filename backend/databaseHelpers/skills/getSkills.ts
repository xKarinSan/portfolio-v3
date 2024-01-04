import getAllDatabaseRows from "../general/getAllDatabaseRows";
import getDatabase from "../general/getDatabase";

export default async function getSkills() {
    try {
        // get the database
        let data = [];
        const experiences = await getDatabase(
            process.env.NOTION_DATABASE_SKILLS
        );
        // get the projects

        data = getAllDatabaseRows(experiences);
        return data;
    } catch {
        return [];
    }
}
