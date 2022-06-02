import React from "react";
import Home from "./Home/Home";
import Achievement from "./Achievement/Achievement";
import Education from "./Education/Education";
import Hobbies from "./Hobbies/Hobbies";
import Contact from "./Contact/Contact";

const Portfolio = () => {
    return (
        <div>
            <Home />
            <Education />
            <Achievement />
            <Hobbies />
            <Contact />
        </div>
    )
}

export default Portfolio;