import { Card, Heading, Badge, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function ProjectCard({ project }: { project: any }) {
    const {
        name,
        imageUrl,
        year,
        projectType,
        techStacks,
        description,
        repoLink,
    } = project;
    const [flipped, setFlipped] = useState(false);

    return (
        <Card
            color="black"
            height={["350px", null, "400px", "500px"]}
            width={["80%", null, "40%"]}
            margin="20px auto"
            backgroundImage={`url(${flipped ? "" : imageUrl})`}
            backgroundSize={"cover"}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            onClick={() => window.open(repoLink, "_blank")}
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
            padding={10}
            cursor={flipped ? "pointer" : "default"}
        >
            {flipped ? (
                <>
                    <Heading fontWeight={"normal"} fontSize={"24px"}>
                        {name} ({year})
                        {projectType.map((type: any) => {
                            const { name, color } = type;
                            console.log("color", color.toString(16));
                            return (
                                <Badge
                                    background={"#a32a2a"}
                                    margin="5px"
                                    width="fit-content"
                                    color={"white"}
                                >
                                    {name}
                                </Badge>
                            );
                        })}
                    </Heading>
                    <Heading
                        fontWeight={"normal"}
                        fontSize={"18px"}
                        textAlign={"left"}
                        margin="10px"
                    >
                        Description
                    </Heading>
                    <Text fontSize={["13px", null, "15px"]} textAlign={"left"}>
                        {description}
                    </Text>
                    <Heading
                        fontWeight={"normal"}
                        fontSize={"18px"}
                        textAlign={"left"}
                        margin="10px"
                    >
                        Tech Stacks
                    </Heading>
                    {techStacks.map((tech: any) => {
                        const { name, color } = tech;
                        return (
                            <Badge
                                background={"#cc7a37"}
                                margin="5px"
                                width="fit-content"
                                color={"white"}
                            >
                                {name}
                            </Badge>
                        );
                    })}
                </>
            ) : (
                <></>
            )}
        </Card>
    );
}
