import React from "react";

import { Home, Achievement, Project, Education, Hobbies, Contact } from './';

const Portfolio = () => {
    return (
        <div>
            <Home />
            <Education />
            <Project />
            <Achievement />
            <Hobbies />
            <Contact />
        </div>
    )
}

export default Portfolio;