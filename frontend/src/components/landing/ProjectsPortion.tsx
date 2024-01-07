import { Box, Heading, Text } from "@chakra-ui/react";
import ProjectCard from "./cards/ProjectCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Project from "../../types/ProjectType";

export default function ProjectsPortion({ projects }: { projects: Project[] }) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <Box margin="auto" width={["80%"]}>
            <Heading fontSize={28}>My Projects</Heading>
            <Text fontSize={[18,null,25]} fontWeight="light">Here are some projects I’ve worked on.</Text>
            <Carousel responsive={responsive}>
                {projects
                    ?.filter((project) => project.toFeature)
                    .map((project: Project) => {
                        return (
                            <ProjectCard key={project.id} project={project} />
                        );
                    })}
            </Carousel>
            {/* </Carousel> */}
        </Box>
    );
}
