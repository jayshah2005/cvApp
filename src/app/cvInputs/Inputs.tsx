import { TextField } from "@mui/material"
import { HeaderInput } from "./HeaderInput"
import { EducationInput } from "./EducationInput"
import "./cvInput.css"
import "./../../App.css"

export function InputCV({
    header,
    setHeader,
    education,
    setEducation,
    workExperience,
    setWorkExperience,
    projectExperience,
    setProjectExperience
}) {

    return(
        <div id="cvInput">
            <HeaderInput
                header={header}
                setHeader={setHeader}
            />
            
            <EducationInput 
                education={education} 
                setEducation={setEducation}
            />
            {/* <WorkExperienceInput 
                workExperience={workExperience} 
                setWorkExperience={setWorkExperience}
            />
            <ProjectExperienceInput 
                projectExperience={projectExperience} 
                setProjectExperience={setProjectExperience}
            /> */}
        </div>
    )

}