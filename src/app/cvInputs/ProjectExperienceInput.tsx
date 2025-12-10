import { SubsectionHeader } from "./SubSectionHeader";
import "./cvInput.css"
import { createProjectExperienceEntry } from "../templates";

export function ProjectExperienceInput({projectExperience, setProjectExperience}){

    return(
        <div className="inputSection">
            <h1>Project Experience</h1> 
            <SubsectionHeader 
                subsectionName = {"Project"}
                subsection={projectExperience}
                setSubsection={setProjectExperience}
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
        setProjectExperience(prev =>
            prev.map(item =>
            item.id === id ? { ...item, location: e.target.value } : item
            )
        );
    }

    function handleStartDateChange(e, id){
        setProjectExperience(prev =>
            prev.map(item =>
            item.id === id ? { ...item, start_date: new Date(e) } : item
            )
        );
    }

    function handleEndDateChange(e, id){
        setProjectExperience(prev =>
            prev.map(item =>
            item.id === id ? { ...item, end_date: new Date(e) } : item
            )
        );
    }

    function handleCompanyChange(e, id) {
        setProjectExperience(prev =>
            prev.map(item =>
            item.id === id ? { ...item, subtitle: e.target.value } : item
            )
        );
    }

    function handlePositionChange(e, id) {
        setProjectExperience(prev =>
            prev.map(item =>
            item.id === id ? { ...item, title: e.target.value } : item
            )
        );
    }

    function removeSubheading(e, id) {
        setProjectExperience(prev => prev.filter(item => item.id !== id));
    }

    function addSubheading(){
        setProjectExperience(prev => [...prev, createProjectExperienceEntry()])
    }
}