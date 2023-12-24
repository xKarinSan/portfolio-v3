export default function getAllDatabaseRows(databaseResults: any) {
    try {
        let res: any[] = [];
        databaseResults?.results.forEach((result: any) => {
            res.push(result.properties);
        });
        return res;
    } catch {
        return [];
    }
}
