import { Button, TextField } from "@mui/material";
import { Points } from "./Points";

export function HeaderInput({ header, setHeader }) {

    let subheadings = header.subheading
    
    return (
        <div className="inputSection">
            <h1>Header</h1>
            <TextField
                variant="standard"
                value={header.name}
                onChange={handleNameChange}
                label="Name"
                fullWidth
            />

            <Points
                pointHeader={"Subheadings"}
                content={subheadings}
                removePoint={removeSubheading}
                changePoint={handleSubheadingChange}
                addSubheading={addSubheading}
            />
        </div>
    );

    function addSubheading(){
        let json = {
            id: crypto.randomUUID(),
            text: ""
        }

        subheadings.push(json)

        setHeader({...header, 
            subheading: [...subheadings]
        })
    }

    function removeSubheading(e, id){
        let i = findIndex(id)

        subheadings.splice(i, 1)

        setHeader({...header, 
            subheading: [...subheadings]
        })
    }

    function handleNameChange(e) {
        setHeader({
            ...header,
            name: e.target.value
        });
    }

    function handleSubheadingChange(e, id) {
        
        let i = findIndex(id)

        subheadings[i].text = e.target.value

        setHeader({...header, 
            subheading: [...subheadings]
        })
    }

    function findIndex(id){
        let i = 0
        let n = subheadings.length


        while(i < n){
            
            if(subheadings[i].id == id){
                break;
            }

            i++
        }

        return i
    }

}
