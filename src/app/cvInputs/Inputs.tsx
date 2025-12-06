import { TextField } from "@mui/material"
import "./cvInput.css"

export function InputCV({header, education, workExperience, projectExperience}){

    return(
        <div id="cvInput">
            {/* <HeaderInput content={header} />
            <EducationInput content={education} />
            <WorkExperienceInput content={workExperience} />
            <ProjectExperienceInput content={projectExperience} /> */}
            <TextField id="filled-basic" label="Filled" variant="filled" />
        </div>
    )

}