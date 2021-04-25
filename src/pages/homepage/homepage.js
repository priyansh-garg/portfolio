import React from "react";
import "./homepage.scss";
import profimg from "../../assets/pgc.jpg";
import DisplayTile from "../../components/displayTile/displayTile.js"
// import tilebgimg from "../../assets/1.jpg";
function homepage(){
        return(
            <div >
            <div className="homepage"></div>
                <div className="glassEffect">
                <div>
                <h1 className="heading">
                    Hello ! I am <span className="headingAnimation1">Priyansh</span>
                    <span className="headingAnimation2">a Web Developer</span>
                </h1>
                
                <img src={profimg} alt="Priyansh Garg" className="profileimg"></img>
                </div>
                <div>
                
                <DisplayTile link ="work" tilebgimg="null" title="WORK" x="-3" y="12" z="0" angle="60deg" topp="-20vw" leftp="10%"></DisplayTile>
                <DisplayTile link = "skills" tilebgimg="null" title="SKILLS" x="3" y="12" z="0" angle="60deg" topp="-33vw" leftp="55%"></DisplayTile>
                <DisplayTile link = "aboutme" tilebgimg="null" title="ABOUT ME" x="-3" y="-12" z="0" angle="60deg" topp="-28vw" leftp="10%"></DisplayTile>
                <DisplayTile link = "contact" tilebgimg="null" title="CONTACT" x="3" y="-12" z="0" angle="60deg" topp="-40vw" leftp="55%"></DisplayTile>
                </div>
                </div>
            </div>
        );
    
}

export default homepage;