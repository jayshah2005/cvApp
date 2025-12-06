import "./cvOutput.css"

function  Header({content}){

    let list = content.subheading.map(subheading => subheading.text).join(" | ")    

    return(
        <header id="header">
            <h1>{content.name}</h1>
            <div>{list}</div>
        </header>
    )
}

export default Header

