import Navbar from "@/components/general/Navbar";
import HeroPortion from "@/components/landing/HeroPortion";
import AboutMePortion from "@/components/landing/AboutMePortion";
import SkillSetPortion from "@/components/landing/SkillsetPortion";
import ProjectsPortion from "@/components/landing/ProjectsPortion";
import ContactMePortion from "@/components/landing/ContactMePortion";
import ExperiencePortion from "@/components/landing/ExperiencePortion";
import { useRef } from "react";
import { Box } from "@chakra-ui/react";
import RefTagType from "@/types/RefTagType";

export default function LandingPage() {
    const homeRef = useRef(null);
    const aboutMeRef = useRef(null);
    const skillSetRef = useRef(null);
    const projectsRef = useRef(null);
    const experienceRef = useRef(null);
    const contactMeRef = useRef(null);

    const refSet: RefTagType[] = [
        { refName: "Home", refInstance: homeRef },
        { refName: "About Me", refInstance: aboutMeRef },
        { refName: "Skills", refInstance: skillSetRef },
        { refName: "Projects", refInstance: projectsRef },
        { refName: "Experience", refInstance: experienceRef },
        { refName: "Contact Me", refInstance: contactMeRef },
    ];

    return (
        <>
            <Navbar refSet={refSet} />
            <Box top={50} position="relative">
                <Box ref={homeRef}>
                    <HeroPortion />
                </Box>

                <Box ref={aboutMeRef}>
                    <AboutMePortion />
                </Box>

                <Box ref={skillSetRef}>
                    <SkillSetPortion />
                </Box>

                <Box ref={projectsRef}>
                    <ProjectsPortion />
                </Box>

                <Box ref={experienceRef}>
                    <ExperiencePortion />
                </Box>

                <Box ref={contactMeRef}>
                    <ContactMePortion />
                </Box>
            </Box>
        </>
    );
}
