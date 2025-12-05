export function Points({points}){

    return (
        <ul className="points">
            {points.map((item) => {                
                return <li key={item.id} >{item.text}</li>
            })}
        </ul>
    )

}