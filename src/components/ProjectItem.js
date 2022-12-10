import React from "react";
import user from "../data/user";

function ProjectItem({ name, about, technologies }) {
  const ilmt =  technologies.map((tek)=>{
    return(
      <span key={tek}>{tek}</span>
    )
  })
  return (
    
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {ilmt}
        
      </div>
    </div>
  );
}

export default ProjectItem;
