import { Card, Heading, Image, SimpleGrid, Box } from "@chakra-ui/react";
import Skillset from "@/types/SkillsetType";

export default function SkillSetPortion({
    skillsets,
}: {
    skillsets: Skillset[];
}) {
    return (
        <Card
            id="cardd"
            transform={"translate(0,-50px)"}
            padding="10px"
            margin="20px auto"
            width={["80%", null, "60%"]}
        >
            <Heading fontSize={28}>My Skillsets</Heading>
            <Box padding="20px auto" width={["80%", "60%"]} margin="auto">
                <SimpleGrid columns={[3, 4]} gap={1} margin="auto">
                    {skillsets
                        ?.filter((skillset: Skillset) => {
                            return skillset.toFeature === true;
                        })
                        .map((skillset: Skillset) => {
                            const { name, logoUrl } = skillset;
                            return (
                                <Image src={logoUrl} alt={name} margin="auto" />
                            );
                        })}
                </SimpleGrid>
            </Box>
        </Card>
    );
}
