import { Box, Heading, Text } from "@chakra-ui/react";
import ProjectCard from "./cards/ProjectCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import Project from "../../types/ProjectType";

export default function ProjectsPortion() {
    const [projects, setProjects] = useState<Project[]>([]);
    useEffect(() => {
        axios
            .get(import.meta.env.VITE_API_LINK + "projects")
            .then((res) => {
                setProjects(res.data);
            });
    }, []);
    return (
        <Box margin="auto" width={["80%"]}>
            <Heading fontSize={28}>My Projects</Heading>
            <Text>
                Here are the projects I’ve worked on. Click here to see more
            </Text>
            <Carousel>
                <CarouselPrevious />
                <CarouselContent>
                    <>
                        {projects
                            .filter((project) => project.toFeature)
                            .map((project: Project) => {
                                return (
                                    <CarouselItem>
                                        <ProjectCard
                                            key={project.id}
                                            project={project}
                                        />
                                    </CarouselItem>
                                );
                            })}
                    </>
                </CarouselContent>

                <CarouselNext />
            </Carousel>
        </Box>
    );
}
