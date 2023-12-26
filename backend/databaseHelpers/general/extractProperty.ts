// returns the values of a row
export default function extractProperty(property: any) {
    try {
        const { type: propertyType } = property;
        switch (propertyType) {
            case "rich_text":
                return property.rich_text[0].plain_text;
            case "title":
                return property.title[0].plain_text;
            case "multi_select":
                return property.multi_select;
            case "number":
                return property.number;
            case "date":
                return property.date.start;
            default:
                return null;
        }
    } catch {
        return null;
    }
}
