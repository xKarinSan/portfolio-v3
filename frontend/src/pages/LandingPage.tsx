import Navbar from "@/components/general/Navbar";
import HeroPortion from "@/components/landing/HeroPortion";
import AboutMePortion from "@/components/landing/AboutMePortion";
import SkillSetPortion from "@/components/landing/SkillsetPortion";
import ProjectsPortion from "@/components/landing/ProjectsPortion";
import ContactMePortion from "@/components/landing/ContactMePortion";
import ExperiencePortion from "@/components/landing/ExperiencePortion";
import { useRef, useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import RefTagType from "@/types/RefTagType";
import Experience from "@/types/ExperienceType";
import Project from "@/types/ProjectType";
import Skillset from "@/types/SkillsetType";
import axios from "axios";
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

    const [loading, setLoading] = useState<boolean>(true);

    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);
    const [skillsets, setSkillsets] = useState<Skillset[]>([]);
    useEffect(() => {
        axios.get(import.meta.env.VITE_API_LINK + "landing").then((res) => {
            const {
                experiences: retrievedExperiences,
                projects: retrievedProjects,
                skills: retrievedSkillsets,
            } = res.data;
            setExperiences(retrievedExperiences);
            setProjects(retrievedProjects);
            setSkillsets(retrievedSkillsets);
            setLoading(false);
            // setExperiences(res.data);
        });
    }, []);

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
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
                            <SkillSetPortion skillsets={skillsets} />
                        </Box>

                        <Box ref={projectsRef}>
                            <ProjectsPortion projects={projects} />
                        </Box>

                        <Box ref={experienceRef}>
                            <ExperiencePortion experiences={experiences} />
                        </Box>

                        <Box ref={contactMeRef}>
                            <ContactMePortion />
                        </Box>
                    </Box>
                </>
            )}
        </>
    );
}
