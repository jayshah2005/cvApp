import { SubsectionHeader } from "./SubSectionHeader";
import "./cvInput.css"
import { createEducationEntry } from "../templates";

export function EducationInput({education, setEducation}){

    return(
        <div className="inputSection">
            <h1>Education</h1> 
            <SubsectionHeader 
                subsectionName = {"Education"}
                subsection={education}
                handleTitleChange={handleEducationTitleChange}
                handleSubtitleChange={handleEducationSubtitleChange}
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

    function handleEducationTitleChange(e, id) {
        setEducation(prev =>
            prev.map(item =>
            item.id === id ? { ...item, title: e.target.value } : item
            )
        );
    }

    function handleEducationSubtitleChange(e, id) {
        setEducation(prev =>
            prev.map(item =>
            item.id === id ? { ...item, subtitle: e.target.value } : item
            )
        );
    }

    function removeSubheading(e, id) {
        setEducation(prev => prev.filter(item => item.id !== id));
    }

    function addSubheading(){
        setEducation(prev => [...prev, createEducationEntry()])
    }
}