import { SectionTitle } from "./SectionTitle"
import { Points } from "./Points"
import "./inputs.css"
import dateToString from "./date_formater"

export function WorkExperience({content}){


    return(
        <div className="section">
                
            <SectionTitle title={"Work Experience"} />
    
            {content.map((item) => {
                return (
                <WorkSection content={item} key={item.id}/>
            )
            })}
        </div>
    )
}

function WorkSection({ content }) {

    let date = dateToString(content.start_date, content.end_date)

    return(
        <div className="subsection">

            <div className="subsection_subhead_1">
                <div>{content.company}</div>
                <div>{content.location}</div>
            </div>

            <div className="subsection_subhead_2">
                <div>{content.position}</div>
                <div>{date}</div>
            </div>

            <Points points={content.points}/>

        </div>
    )
}
