import { CircularProgress, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import "./skillbarCircular.scss";

const useStyles= makeStyles({

    Bar:{
        width:'100px',
        color:'white',
        
    }
});




function SkillBarCircular({title,progrs}) {
    const classes=useStyles(); 
    const [progrsTrigger, setprogrsTrigger] = useState(0)

    function handleHover(){
        // while(progrsTrigger<progrs){
            // setTimeout(()=>console.log(1),1)
            // setprogrsTrigger(progrsTrigger+1);
        // }
        const progressAnime=()=>{
            for(let j=0;j<100;j++){
                setTimeout(()=> {setprogrsTrigger(progrsTrigger=>(progrsTrigger+1<progrs?progrsTrigger+1:progrs)) ;},30)
                if(progrsTrigger===progrs)
                break;
                
            }
            };
            progressAnime();
        // setprogrsTrigger(0);
        // setTimeout(progressAnime(),10);
        // console.log(1);
    }
    const handleMouseLeave=()=>{

        setprogrsTrigger(0);
    }
    return(
        <div className="card" onMouseEnter={handleHover}  onMouseLeave={handleMouseLeave}>
        <div className="title">
        <h2>{title}</h2>
        </div>
        <div className="circular-bar" >
        {/* <svg >
      <circle class="stroke" cx="44" cy="44" r="40.4"/>
         </svg> */}
            
            <CircularProgress  className={`${classes.Bar} circular-bar`} value={progrsTrigger}
            thickness='2' size='10vw' variant="determinate" />
         
        </div>
        </div>);
}

export default SkillBarCircular;