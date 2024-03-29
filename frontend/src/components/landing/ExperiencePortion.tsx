import { Box, Card, Heading, Text } from "@chakra-ui/react";
import Experience from "@/types/ExperienceType";

export default function ExperiencePortion({
    experiences,
}: {
    experiences: Experience[];
}) {
    return (
        <Box margin="auto" width={["80%", "60%", "40%"]}>
            <Heading fontSize={28}>My Experiences</Heading>
            <Text fontSize={[18,null,25]} fontWeight="light" >Here are the roles I have taken up so far.</Text>
            {experiences
                ?.sort((a: Experience, b: Experience) => {
                    return Date.parse(b.startDate) - Date.parse(a.startDate);
                })
                .map((experience: Experience) => {
                    const {
                        roleName,
                        companyName,
                        startDate,
                        description,
                        endDate,
                    } = experience;
                    return (
                        <Card margin="30px auto" padding="25px">
                            <Heading
                                fontSize="24px"
                                fontWeight={"normal"}
                                textAlign={"left"}
                            >
                                {roleName}
                            </Heading>
                            <Text align={"left"} fontStyle={"italic"}>
                                {companyName}
                            </Text>
                            <Text align={"left"} fontWeight={"light"}>
                                From {startDate} to {endDate}
                            </Text>
                            <Text align={"left"} fontWeight={"normal"}>
                                {description}
                            </Text>
                        </Card>
                    );
                })}
        </Box>
    );
}
