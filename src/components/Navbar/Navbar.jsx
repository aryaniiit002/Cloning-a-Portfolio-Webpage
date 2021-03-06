/* eslint-disable no-unused-vars */
import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';

import "./Navbar.css";

function Navbar() {
    const location = useLocation();
    const history = useNavigate();
    const path = location.hash;

    return (
        <div className="navContainer">
            <div className="navOptContainer">
                <NavHashLink smooth to="/#home"
                    className={`navOpt ${path === "#home" && "select"}`}>
                    HOME
                </NavHashLink>
                <NavHashLink smooth to="/#education"
                    className={`navOpt ${path === "#education" && "select"}`}>
                    EDUCATION
                </NavHashLink>
                <NavHashLink smooth to="/#achievement"
                    className={`navOpt ${path === "#achievement" && "select"}`}>
                    ACHIEVEMENT
                </NavHashLink>
                <NavHashLink smooth to="/#hobbies"
                    className={`navOpt ${path === "#hobbies" && "select"}`}>
                    HOBBIES
                </NavHashLink>
                <NavHashLink smooth to="/#contact"
                    className={`navOpt ${path === "#contact" && "select"}`}>
                    CONTACT
                </NavHashLink>
            </div>
        </div>
    )
}

export default Navbar;