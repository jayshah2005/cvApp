import { Button, TextField } from "@mui/material"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Points } from "./Points";
import dayjs from "dayjs";
import "./cvInput.css"
import { createPoint } from "../templates";

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
    
    return(<>
            {subsection.map((content, index) => {

                let id = content.id

                if(content.length == 0) return <></>

                return (
                    <div className="InputContainer" key={content.id}>
                        <Button color="error" className="removeButton" onClick={(e) => removeSubheading(e, id)}>
                                x
                        </Button>
                        <h2>{subsectionName} {index + 1}</h2>
                        <TextField
                            variant="standard"
                            label="Title"
                            value={content.title}
                            onChange={(e) => {handleTitleChange(e, id)}}
                            fullWidth
                        />

                        {"subtitle" in content
                        ? <TextField
                            variant="standard"
                            label="Subtitle"
                            value={content.subtitle}
                            onChange={(e) => {handleSubtitleChange(e, id)}}
                            fullWidth
                        />
                        : <></>}

                        {"location" in content
                        ? <TextField
                            variant="standard"
                            label="Location"
                            value={content.location}
                            onChange={(e) => {handleLocationChange(e, id)}}
                            fullWidth
                        />
                        : <></>}

                        

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
                        </div>
                        {   
                            "points" in content? 
                            <Points 
                                pointHeader={""} 
                                content={content.points} 
                                removePoint={(e, pointId) => removePoint(e, id, pointId)} 
                                changePoint={(e, pointId) => changePoint(e, id, pointId)} 
                                addSubheading={() => addPoint(id)}
                            />
                            : []
                        }
                    </div>
                )
            })}

    </>)

    function addPoint(id) {
        if(!setSubsection) return;
        setSubsection(prev => 
            prev.map(item => 
                item.id === id
                    ? { ...item, points: [...(item.points || []), createPoint()] }
                    : item
            )
        );
    }

    function removePoint(e, id, pointId) {
        if(!setSubsection) return;
        setSubsection(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, points: (item.points || []).filter(p => p.id !== pointId) }
                    : item
            )
        );
    }

    function changePoint(e, id, pointId) {
        if(!setSubsection) return;
        const value = e.target.value;

        setSubsection(prev =>
            prev.map(item =>
                item.id === id
                    ? {
                        ...item,
                        points: (item.points || []).map(p =>
                            p.id === pointId ? { ...p, text: value } : p
                        ),
                    }
                    : item
            )
        );
    }

}