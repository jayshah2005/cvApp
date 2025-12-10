import { SubsectionHeader } from "./SubSectionHeader";
import "./cvInput.css"
import { createWorkExperienceEntry } from "../templates";

export function WorkExperienceInput({workExperience, setWorkExperience}){

    return(
        <div className="inputSection">
            <h1>Work Experience</h1> 
            <SubsectionHeader 
                subsectionName = {"Work"}
                subsection={workExperience}
                setSubsection={setWorkExperience}
                handleTitleChange={handlePositionChange}
                handleSubtitleChange={handleCompanyChange}
                handleLocationChange={handleLocationChange}
                handleStartDateChange={handleStartDateChange}
                handleEndDateChange={handleEndDateChange}
                removeSubheading={removeSubheading}
            />
            <button onClick={addSubheading} className="addButton">
                +
            </button>
        </div>
    )

    function handleLocationChange(e, id){
        setWorkExperience(prev =>
            prev.map(item =>
            item.id === id ? { ...item, location: e.target.value } : item
            )
        );
    }

    function handleStartDateChange(e, id){
        setWorkExperience(prev =>
            prev.map(item =>
            item.id === id ? { ...item, start_date: new Date(e) } : item
            )
        );
    }

    function handleEndDateChange(e, id){
        setWorkExperience(prev =>
            prev.map(item =>
            item.id === id ? { ...item, end_date: new Date(e) } : item
            )
        );
    }

    function handleCompanyChange(e, id) {
        setWorkExperience(prev =>
            prev.map(item =>
            item.id === id ? { ...item, subtitle: e.target.value } : item
            )
        );
    }

    function handlePositionChange(e, id) {
        setWorkExperience(prev =>
            prev.map(item =>
            item.id === id ? { ...item, title: e.target.value } : item
            )
        );
    }

    function removeSubheading(e, id) {
        setWorkExperience(prev => prev.filter(item => item.id !== id));
    }

    function addSubheading(){
        setWorkExperience(prev => [...prev, createWorkExperienceEntry()])
    }
}