import React from "react";
import "./skills.scss";
import Header from "../../components/header/header.js";
import SkillBar from "../../components/skillbarCircular/skillbarCircular.js";
function skills(){

    return(<div>
    <Header />
    <div className="skills">
    <SkillBar title="Node.js" progrs="80"/>
    <SkillBar title="React.js" progrs="70"/>
    <SkillBar title="MongoDb" progrs="50"/>
    <SkillBar title="CSS" progrs="65"/>
    <SkillBar title="C++" progrs="75"/>
    
    </div>
    </div>);
}

export default skills;