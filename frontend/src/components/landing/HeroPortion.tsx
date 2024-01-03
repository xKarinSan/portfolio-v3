// import { Box } from "lucide-react";
import CodingHero from "../../assets/CodingHero.png";
import { Image, Heading, Text, Box } from "@chakra-ui/react";
export default function HeroPortion() {
    return (
        <Box width={["70%", null, "40%", "35%"]} margin="auto">
            <Heading variant="h2" fontWeight={"bold"} margin="10px">
                Software Engineer
            </Heading>
            <Text margin="20px">
                I deliver fully functioning applications and am very passionate
                in my craft.
            </Text>
            <Image
                src={CodingHero}
                width={["80%", null, "60%", "40%"]}
                margin="0 auto"
            />
        </Box>
    );
}
