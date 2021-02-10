import React from "react";
import "./displayTile.scss";
import {withRouter} from 'react-router-dom';
function displaceEffect({topp,title,leftp}) {
    // console.log(typeof(topp));
    if(leftp==="10%"){
        if(topp==="-20vw")
        {document.getElementById(title).classList.add("hoverleftup");
    }else if(topp==="-28vw"){
        document.getElementById(title).classList.add("hoverleftdown");
    }
            
}else{
    if(topp==="-33vw")
        {document.getElementById(title).classList.add("hoverrightup");
    }else if(topp==="-40vw"){

        document.getElementById(title).classList.add("hoverrightdown");

    }
    }
}
function removeDisplace({topp,title,leftp}) {
    if(leftp==="10%"){
        if(topp==="-20vw")
        {document.getElementById(title).classList.remove("hoverleftup");
    }else if(topp==="-28vw"){
        document.getElementById(title).classList.remove("hoverleftdown");
    }    
    }else{
        if(topp==="-33vw")
        {document.getElementById(title).classList.remove("hoverrightup");
    }else if(topp==="-40vw"){

        document.getElementById(title).classList.remove("hoverrightdown");

    }
        
    }
}
function displayTile({link,history,tilebgimg,x,y,z,angle,title,topp,leftp}){

    
        return(
            <div onClick={()=>history.push(`/${link}`)} className="tile" onMouseOver={()=>displaceEffect({topp,leftp,title})} onMouseOut={()=>removeDisplace({topp,leftp,title})}
            style={{transform:`rotate3d(${x},${y},${z},${angle})`,
            top:`${topp}`,
            left:`${leftp}` }} 
            >
            <div style={tilebgimg?{backgroundImage:`url(${tilebgimg})`}:null} className="bgTileImg" id={title}></div>
            <div style={{textAlign:"center",
            fontSize:"3em",
             
            }} ><h2 id={`${title}1`}   className="topic">{title}</h2></div>
            </div>
        );
    };


export default withRouter(displayTile);