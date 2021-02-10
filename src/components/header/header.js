import React from "react";
import "./header.scss";

import {Link,withRouter} from 'react-router-dom';
function Header(){
    return(<div>
        <div className="header">
            <Link className="nav-bar-item" to="/">Home</Link>
            <div className="nav-bar">
                <Link className="nav-bar-item" to="/work">Work</Link>
                <Link className="nav-bar-item" to="/skills">Skills</Link>
                <Link className="nav-bar-item" to="/contact">Contact</Link>
                <Link className="nav-bar-item" to="/aboutme">AboutMe</Link>

            </div>
        </div>
    </div>);
};

export default Header; 