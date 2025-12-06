import { TextField } from "@mui/material";

export function HeaderInput({ header, setHeader }) {

    let subheadings = header.subheading
    
    return (
        <div id="HeaderInput">
            <h1>Header</h1>
            <TextField
                variant="standard"
                value={header.name}
                onChange={handleNameChange}
                label="Name"
                fullWidth
            />
            <div id="SubheadingInput">
                <h2>Subheadings:</h2>
                {subheadings.map((subheading, index) => {
                
                let {text, id} = subheading 
                
                    return(
                        <TextField
                            variant="standard"
                            value={text}
                            onChange={(e) => handleSubheadingChange(e, id)}
                            label={"subheading " + (index + 1)}
                            fullWidth
                            key={id}
                        />
                    )
                })}
            </div>
        </div>
    );

    function handleNameChange(e) {
        setHeader({
            ...header,
            name: e.target.value
        });
    }

    function handleSubheadingChange(e, id) {
        let i = 0
        let n = subheadings.length


        while(i < n){
            
            if(subheadings[i].id == id){
                break;
            }

            i++
        }

        subheadings[i].text = e.target.value

        setHeader({...header, 
            subheading: [...subheadings]
        })

        console.log("subheadings:", subheadings);
    }

}
