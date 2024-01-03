import { Box, Heading, Text } from "@chakra-ui/react";
export default function ContactMePortion() {
    return (
        <>
            <Box
                background="#AD1919"
                color="white"
                padding="20px"
                paddingBottom="60px"
            >
                <Heading variant="h2" fontWeight={"bold"} margin="10px">
                    Contact Me
                </Heading>
                <Text marginTop={5}>
                    Improving, learning and living a step a day.{" "}
                </Text>
            </Box>
        </>
    );
}
