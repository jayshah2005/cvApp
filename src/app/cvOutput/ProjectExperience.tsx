import { SectionTitle } from "./SectionTitle"
import { Points } from "./Points"
import dateToString from "./date_formater"

export function ProjectExperience({content}){
    return(
            <div className="section">
                    
                <SectionTitle title={"Projects"} />
        
                {content.map((item) => {
                    return (
                    <ProjectSection project={item} key={item.id}/>
                )
                })}
            </div>
    )
}

function ProjectSection({ project }) {

    let date = dateToString(project.start_date, project.end_date)

    return(
        <div className="subsection">

            <div className="subsection_subhead_1">
                <div>{project.title} {project.link ? "|" : ""} {project.link ? <a href={project.link} target="_blank" rel="noreferrer">{project.link.replace(/^https?:\/\//, '')}</a> : <div></div>}</div>
                <div>{date}</div>
            </div>

            <Points points={project.points}/>

        </div>
    )
}