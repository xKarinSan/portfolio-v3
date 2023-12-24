import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
    const getProjects = async () => {
        try {
            const projects = await axios.get("http://localhost:3000/projects");
            console.info("projects", projects.data);
        } catch (err) {
            console.log("err", err);
        }
    };
    useEffect(() => {
        getProjects();
    }, []);

    return <></>;
}

export default App;
