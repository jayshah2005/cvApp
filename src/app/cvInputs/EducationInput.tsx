import { Button, TextField } from "@mui/material"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { SubsectionHeader } from "./SubSectionHeader";
import dayjs from "dayjs";
import "./cvInput.css"

export function EducationInput({education, setEducation}){

    let educations = education

    return(
        <div className="inputSection">
            <h1>Education</h1> 
            <SubsectionHeader 
                subsectionName = {"Education"}
                subsection={education}
                handleTitleChange={handleEducationDegreeChange}
                handleSubtitleChange={handleEducationUniversityChange}
                handleLocationChange={handleEducationLocationChange}
                handleStartDateChange={handleEducationStartDateChange}
                handleEndDateChange={handleEducationEndDateChange}
                removeSubheading={removeSubheading}
            />
            <button onClick={addSubheading} className="addButton">
                +
            </button>
        </div>
    )

    function handleEducationLocationChange(e, id){
        setEducation(prev =>
            prev.map(item =>
            item.id === id ? { ...item, location: e.target.value } : item
            )
        );
    }

    function handleEducationStartDateChange(e, id){
        setEducation(prev =>
            prev.map(item =>
            item.id === id ? { ...item, start_date: new Date(e) } : item
            )
        );
    }

    function handleEducationEndDateChange(e, id){
        setEducation(prev =>
            prev.map(item =>
            item.id === id ? { ...item, end_date: new Date(e) } : item
            )
        );
    }

    function handleEducationUniversityChange(e, id) {
        setEducation(prev =>
            prev.map(item =>
            item.id === id ? { ...item, university: e.target.value } : item
            )
        );
    }

    function handleEducationDegreeChange(e, id) {
        setEducation(prev =>
            prev.map(item =>
            item.id === id ? { ...item, degree: e.target.value } : item
            )
        );
    }

    function removeSubheading(e, id) {
        setEducation(prev => prev.filter(item => item.id !== id));
    }

    function addSubheading(){
        let json = {
            degree: "",
            university: "",
            location: "",
            start_date: new Date(),
            end_date: new Date(),
            id: crypto.randomUUID()
        }

        setEducation([...education, json])
    }
}