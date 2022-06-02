import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';


function Navbar() {
    const location = useLocation();
    const history = useNavigate();
    const path = location.hash;
    return (
        <div className="navContainer">
            <div className="navOptContainer">
                <NavHashLink smooth to="/portfolio#home" className={`navOpt ${path === "#home" && "select"}`}>HOME</NavHashLink>
                <NavHashLink smooth to="/portfolio#skill" className={`navOpt ${path === "#education" && "select"}`}>EDUCATION</NavHashLink>
                <NavHashLink smooth to="/portfolio#projects" className={`navOpt ${path === "#achievement" && "select"}`}>ACHIEVEMENT</NavHashLink>
                <NavHashLink smooth to="/portfolio#experience" className={`navOpt ${path === "#hobbies" && "select"}`}>HOBBIES</NavHashLink>
                <NavHashLink smooth to="/portfolio#contact" className={`navOpt ${path === "#contact" && "select"}`}>CONTACT</NavHashLink>
            </div>
        </div>
    )
}

export default Navbar;