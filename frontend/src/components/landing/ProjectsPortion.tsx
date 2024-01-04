import { Box, Heading, Text } from "@chakra-ui/react";
import ProjectCard from "./cards/ProjectCard";
export default function ProjectsPortion() {
    const projects = [
        {
            id: "3a0aec15-904d-419c-8015-4c457ee1c910",
            projectType: [
                {
                    id: "9371cc6d-7917-44b1-a7d2-1069fc5187b1",
                    name: "School",
                    color: "yellow",
                },
            ],
            techStacks: [
                {
                    id: "bcb12a35-8e9c-4048-9cd7-c54d2b89e565",
                    name: "React.JS",
                    color: "brown",
                },
                {
                    id: "80a35ebd-5676-46d4-974a-a6e9ab825be3",
                    name: "Vercel",
                    color: "blue",
                },
                {
                    id: "1fd72eba-81b2-4775-85fc-b686f3d0b0cd",
                    name: "Mongodb",
                    color: "green",
                },
                {
                    id: "b166bbe4-4b50-4301-9571-871f0f84a3e2",
                    name: "ExpressJS",
                    color: "default",
                },
                {
                    id: "00419bc2-4514-4fd6-89a8-38370fe53199",
                    name: "Javascript",
                    color: "red",
                },
            ],
            description:
                "A new and improved UI for Honey Nights for handling their reservations and seat allocations automatically.",
            toFeature: false,
            imageUrl: "https://i.imgur.com/mTCufWe.jpeg",
            year: 2023,
            repoLink: "https://github.com/imxavieer/FYP",
            name: "Honey Nights UI (FYP)",
        },
        {
            id: "1920b14c-126f-4f4e-9bbf-9a9bb6153a3c",
            projectType: [
                {
                    id: "9b941bdc-6840-4cda-8446-cfa7e0df4242",
                    name: "Personal",
                    color: "purple",
                },
            ],
            techStacks: [
                {
                    id: "bcb12a35-8e9c-4048-9cd7-c54d2b89e565",
                    name: "React.JS",
                    color: "brown",
                },
                {
                    id: "46d3d0ed-f05e-48e6-8ccc-6ef90c3d4ee3",
                    name: "FastAPI",
                    color: "orange",
                },
                {
                    id: "1fd72eba-81b2-4775-85fc-b686f3d0b0cd",
                    name: "Mongodb",
                    color: "green",
                },
                {
                    id: "f965fa15-8949-4a2d-a6cc-cc8921c0b7ae",
                    name: "AWS",
                    color: "purple",
                },
                {
                    id: "0fdea6d6-2cb6-492a-95c6-b8342770fc71",
                    name: "Python",
                    color: "orange",
                },
            ],
            description:
                "A simple scheduling application feature to experiment on Github Actions and AWS deployments",
            toFeature: true,
            imageUrl: "https://i.imgur.com/h1kqYNl.png",
            year: 2023,
            repoLink:
                "https://github.com/xKarinSan/action-integrations/tree/main",
            name: "Action Integrations",
        },
        {
            id: "206638ba-82d5-436b-95f4-db228119aa3a",
            projectType: [
                {
                    id: "adf8ea64-32ba-46fb-adc7-cb88c6763f01",
                    name: "Hackathon",
                    color: "pink",
                },
            ],
            techStacks: [
                {
                    id: "bcb12a35-8e9c-4048-9cd7-c54d2b89e565",
                    name: "React.JS",
                    color: "brown",
                },
                {
                    id: "59cf7f91-840d-4a2b-ac9a-9093ed3141ab",
                    name: "Firebase",
                    color: "blue",
                },
                {
                    id: "80a35ebd-5676-46d4-974a-a6e9ab825be3",
                    name: "Vercel",
                    color: "blue",
                },
                {
                    id: "228acc7a-28ca-4f32-a380-0880f853dc6a",
                    name: "Typescript",
                    color: "gray",
                },
            ],
            description:
                "A premiere portal that links lawyers (mentors and mentees) and law firms together.",
            toFeature: false,
            imageUrl: "https://i.imgur.com/zdpcWEd.png",
            year: 2023,
            repoLink: "https://github.com/xKarinSan/Law-Connect",
            name: "Law Connect",
        },
        {
            id: "3563c202-de48-448e-82b8-f20d8ddce6d3",
            projectType: [
                {
                    id: "9b941bdc-6840-4cda-8446-cfa7e0df4242",
                    name: "Personal",
                    color: "purple",
                },
            ],
            techStacks: [
                {
                    id: "eb976aa4-98fc-4f55-a3cb-a8bc1469510d",
                    name: "Next.JS",
                    color: "yellow",
                },
                {
                    id: "1fd72eba-81b2-4775-85fc-b686f3d0b0cd",
                    name: "Mongodb",
                    color: "green",
                },
                {
                    id: "80a35ebd-5676-46d4-974a-a6e9ab825be3",
                    name: "Vercel",
                    color: "blue",
                },
                {
                    id: "228acc7a-28ca-4f32-a380-0880f853dc6a",
                    name: "Typescript",
                    color: "gray",
                },
            ],
            description:
                "A web application that helps streamline team collaboration with video calling and document storage.",
            toFeature: true,
            imageUrl: "https://i.imgur.com/absVnrP.png",
            year: 2023,
            repoLink: "https://github.com/xKarinSan/team-sync",
            name: "Team Sync",
        },
        {
            id: "5c11653f-c299-4460-aae5-7ee824adbe68",
            projectType: [
                {
                    id: "adf8ea64-32ba-46fb-adc7-cb88c6763f01",
                    name: "Hackathon",
                    color: "pink",
                },
            ],
            techStacks: [
                {
                    id: "40d269e6-482d-4c50-b3a9-ee3148a32f3b",
                    name: "Flutter",
                    color: "pink",
                },
                {
                    id: "59cf7f91-840d-4a2b-ac9a-9093ed3141ab",
                    name: "Firebase",
                    color: "blue",
                },
                {
                    id: "1676cf6f-4683-4d59-a2cd-875c92a7a565",
                    name: "Google Maps",
                    color: "green",
                },
            ],
            description:
                "Mobile app that gamifies recycling in Singapore schools.",
            toFeature: true,
            imageUrl: "https://i.imgur.com/uI9wReI.png",
            year: 2023,
            repoLink: "https://github.com/xKarinSan/Google-Ignite-2023",
            name: "Green Quest",
        },
        {
            id: "a7e3b354-856a-410c-91c3-960c256e6895",
            projectType: [
                {
                    id: "adf8ea64-32ba-46fb-adc7-cb88c6763f01",
                    name: "Hackathon",
                    color: "pink",
                },
            ],
            techStacks: [
                {
                    id: "eb976aa4-98fc-4f55-a3cb-a8bc1469510d",
                    name: "Next.JS",
                    color: "yellow",
                },
                {
                    id: "80a35ebd-5676-46d4-974a-a6e9ab825be3",
                    name: "Vercel",
                    color: "blue",
                },
                {
                    id: "926ce8ff-f300-45c6-aa42-974ddfa71ff6",
                    name: "OpenAI",
                    color: "pink",
                },
                {
                    id: "228acc7a-28ca-4f32-a380-0880f853dc6a",
                    name: "Typescript",
                    color: "gray",
                },
            ],
            description:
                "A learning companion that helps students in studying through active recall by offering AMAs, summaries, explanations and flash card generation",
            toFeature: false,
            imageUrl: "https://i.imgur.com/YFYCMWR.png",
            year: 2023,
            repoLink: "https://github.com/xJQx/study-gpt",
            name: "Study GPT",
        },
    ];
    return (
        <Box padding="10px">
            <Heading fontSize={28}>My Projects</Heading>
            <Text>
                Here are the projects I’ve worked on. Click here to see more
            </Text>
            <>
                {projects
                    .filter((project) => project.toFeature)
                    .map((project) => {
                        console.log("project", project);
                        return (
                            <ProjectCard key={project.id} project={project} />
                        );
                    })}
            </>
        </Box>
    );
}
