import { Box, Heading, Text, Link, HStack } from "@chakra-ui/react";
import { FaGithub, FaYoutube, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import { IconType } from "react-icons";
export default function ContactMePortion() {
    const ContactLinks: { icon: IconType; link: string }[] = [
        {
            icon: FaGithub,
            link: "https://github.com/xkarinsan",
        },
        {
            icon: FaYoutube,
            link: "https://www.youtube.com/@xkarinsan",
        },
        {
            icon: FaLinkedin,
            link: "https://www.linkedin.com/in/leesiangmeng/",
        },
        {
            icon: FaRegEnvelope,
            link: "mailto:siang-meng@live.com",
        },
    ];
    return (
        <>
            <Box
                background="#AD1919"
                color="white"
                padding="20px"
                paddingBottom="60px"
                id="contactMe"
            >
                <Heading variant="h2" fontWeight={"normal"} margin="10px">
                    Contact Me
                </Heading>
                <Text marginTop={5} fontWeight="light" fontSize={[18,null,25]}>
                    Improving, learning and living a step a day.{" "}
                </Text>
                <HStack margin="20px auto" justifyContent={"center"}>
                    {ContactLinks.map((contactLink) => {
                        const { icon: CurrentIcon, link } = contactLink;
                        return (
                            <Link href={link} target="_blank">
                                <CurrentIcon fontSize={25}></CurrentIcon>
                            </Link>
                        );
                    })}
                </HStack>
            </Box>
        </>
    );
}
