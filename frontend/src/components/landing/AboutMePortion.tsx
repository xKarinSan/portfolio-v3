import { Box, Heading, Text } from "@chakra-ui/react";
export default function AboutMePortion() {
    return (
        <Box
            background="#AD1919"
            color="white"
            padding="20px"
            paddingBottom="60px"
            id="aboutMe"
        >
            <Box width={["80%", null, "40%"]} margin="auto">
                <Heading marginBottom="10px" fontSize={28} fontWeight={"normal"}>
                    Hiya, I’m Siang Meng. Nice meeting you.
                </Heading>
                <Text >
                    Since my schooling days, I have developed a strong passion
                    for tech. As a result, I have self-learnt various
                    programming languages. This has exposed me to full-stack
                    development and the usage of cloud services as I have also
                    taken up various internships. Apart from my passion, my
                    hardwork and discipline has also helped in my development
                    journey.
                </Text>
            </Box>
        </Box>
    );
}
