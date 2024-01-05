import MultiSelectTag from "./MultiSelectTag";
type Experience = {
    id: string;
    description: string;
    startDate: string;
    endDate: string;
    techStacks: MultiSelectTag[];
    companyName: string;
    roleName: string;
};

export default Experience;
