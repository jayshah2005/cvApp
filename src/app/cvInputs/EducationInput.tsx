import { TextField } from "@mui/material"
import "./cvInput.css"

export function EducationInput(){
    return(
        <div className="inputSection">
            <h1>Education</h1>
            <TextField
                variant="standard"
                label="Name"
                fullWidth
            />
        </div>
    )
}