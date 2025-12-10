import { SectionTitle } from './SectionTitle';

export function Education({ content }) {

    if(content.length == 0){
        return <></>
    }

    return (
    <div className="section">
        
        <SectionTitle title={"Education"} />

        {content.map((item, index) => {
            return (
            <EducationSection content={item} key={item.id}/>
        )
        })}
    </div>
    );
}

function EducationSection({ content }) {    

    let date = content.start_date.toLocaleString('default', { month: 'long' }).substring(0, 3) + " " + content.start_date.getFullYear() + " - " + content.end_date.toLocaleString('default', { month: 'long' }).substring(0, 3) + " " + content.end_date.getFullYear()

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
        </div>
    )
}