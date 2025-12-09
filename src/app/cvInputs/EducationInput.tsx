import { Button, TextField } from "@mui/material"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import "./cvInput.css"

export function EducationInput({education, setEducation}){

    let educations = education

    return(
        <div className="inputSection">
            <h1>Education</h1>            
            {education.map((content, index) => {

                let id = content.id 

                return (
                    <div className="InputContainer" key={content.id}>
                        <Button color="error" className="removeButton" onClick={(e) => removeSubheading(e, id)}>
                                x
                        </Button>
                        <h2>Education {index + 1}</h2>
                        <TextField
                            variant="standard"
                            label="University"
                            value={content.university}
                            onChange={(e) => {handleEducationUniversityChange(e, id)}}
                            fullWidth
                        />
                       
                        <TextField
                            variant="standard"
                            label="Degree"
                            value={content.degree}
                            onChange={(e) => {handleEducationDegreeChange(e, id)}}
                            fullWidth
                        />

                        <TextField
                            variant="standard"
                            label="Location"
                            value={content.location}
                            onChange={(e) => {handleEducationLocationChange(e, id)}}
                            fullWidth
                        />

                         <div className="datePicker">
                            <DatePicker 
                                label={'Start Date'} 
                                views={['month', 'year']} 
                                value={dayjs(content.start_date)}
                                slotProps={{
                                    textField: {
                                    size: "small",
                                    }
                                }} 
                                onChange={(e) => handleEducationStartDateChange(e, id)}
                            />
                            
                            <DatePicker 
                                label={'End Date'} 
                                views={['month', 'year']} 
                                value={dayjs(content.end_date)}
                                slotProps={{
                                    textField: {
                                    size: "small"
                                    }
                                }}

                            />
                        </div>
                    </div>
                )
            })}
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