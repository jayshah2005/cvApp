import { SectionTitle } from "./SectionTitle"
import { Points } from "./Points"
import "./cvOutput.css"
import dateToString from "./date_formater"

export function WorkExperience({content}){

    if(content.length == 0) return <></>

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
                <div>{content.title}</div>
                <div>{content.location}</div>
            </div>

            <div className="subsection_subhead_2">
                <div>{content.subtitle}</div>
                <div>{date}</div>
            </div>

            <Points points={content.points}/>

        </div>
    )
}
