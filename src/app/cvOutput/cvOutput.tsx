import React, { useState } from "react";
import Header  from "./Header"
import { Education } from "./Education";
import { WorkExperience } from "./WorkExperience";
import { ProjectExperience } from "./ProjectExperience";
import "./../../App.css"

export function OutputCV({header, education, workExperience, projectExperience}) {

    return(
    <div id="cvOutput">
        <Header content={header} />
        <Education content={education} />
        <WorkExperience content={workExperience} />
        <ProjectExperience content={projectExperience} />
    </div>
    )
}