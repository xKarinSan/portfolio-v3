import "./App.css";
import Navbar from "@/components/general/Navbar";
import HeroPortion from "./components/landing/HeroPortion";
import AboutMePortion from "./components/landing/AboutMePortion";
import SkillSetPortion from "./components/landing/SkillsetPortion";
import ProjectsPortion from "./components/landing/ProjectsPortion";
import ContactMePortion from "./components/landing/ContactMePortion";

function App() {
    return (
        <>
            <Navbar />
            <HeroPortion />
            <AboutMePortion />
            <SkillSetPortion />
            <ProjectsPortion />
            <ContactMePortion />
        </>
    );
}

export default App;
