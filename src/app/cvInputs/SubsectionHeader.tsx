import { Button, TextField } from "@mui/material"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Points } from "./Points";
import dayjs from "dayjs";
import "./cvInput.css"

export function SubsectionHeader({
    subsectionName,
    subsection, 
    setSubsection,
    handleTitleChange, 
    handleSubtitleChange, 
    handleLocationChange, 
    handleStartDateChange, 
    handleEndDateChange,
    removeSubheading}){

    let points = subsection.points ? subsection.points : []

    return(<>
            {subsection.map((content, index) => {

                let id = content.id 

                return (
                    <div className="InputContainer" key={content.id}>
                        <Button color="error" className="removeButton" onClick={(e) => removeSubheading(e, id)}>
                                x
                        </Button>
                        <h2>{subsectionName} {index + 1}</h2>
                        <TextField
                            variant="standard"
                            label="University"
                            value={content.university}
                            onChange={(e) => {handleTitleChange(e, id)}}
                            fullWidth
                        />
                       
                        <TextField
                            variant="standard"
                            label="Degree"
                            value={content.degree}
                            onChange={(e) => {handleSubtitleChange(e, id)}}
                            fullWidth
                        />

                        <TextField
                            variant="standard"
                            label="Location"
                            value={content.location}
                            onChange={(e) => {handleLocationChange(e, id)}}
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
                                onChange={(e) => handleStartDateChange(e, id)}
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
                                onChange={(e) => handleEndDateChange(e, id)}
                            />

                            <Points pointHeader={""} content={content.points} removePoint={} changePoint={} addSubheading={}/>
                        </div>
                    </div>
                )
            })}

    </>)

     function addSubheading(points){
        let json = {
            id: crypto.randomUUID(),
            text: ""
        }

        points.push(json)

        setSubsection({...subsection, 
            points: [...points]
        })
    }

    function removeSubheading(points, e, id){
        let i = findIndex(id)

        points.splice(i, 1)

        setSubsection({...subsection, 
            subheading: [...points]
        })
    }

    function handleNameChange(e) {
        setSubsection({
            ...subsection,
            name: e.target.value
        });
    }

    function handleSubheadingChange(e, id) {
        
        let i = findIndex(id)

        points[i].text = e.target.value

        setSubsection({...header, 
            points: [...points]
        })
    }

    function findIndex(id){
        let i = 0
        let n = points.length


        while(i < n){
            
            if(points[i].id == id){
                break;
            }

            i++
        }

        return i
    }
}