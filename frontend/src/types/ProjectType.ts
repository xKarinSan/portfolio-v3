import MultiSelectTag from "./MultiSelectTag";

type Project = {
    id: string;
    projectType: MultiSelectTag[];
    techStacks: MultiSelectTag[];
    name: string;
    description: string;
    imageUrl: string;
    year: number;
    toFeature: boolean;
    repoLink: string;
};

export default Project;
