import { Card, Heading } from "@chakra-ui/react";

export default function SkillSetPortion() {
    return (
        <Card
            id="cardd"
            // height will be adjusted accordingly
            height="50vh"
            transform={"translate(0,-50px)"}
            padding="10px"
            margin="20px"
        >
            <Heading fontSize={28}>My Skillsets</Heading>
        </Card>
    );
}
