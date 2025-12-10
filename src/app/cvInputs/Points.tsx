import { TextField,Button } from "@mui/material"

export function Points({pointHeader, content, removePoint, changePoint, addSubheading}){
    return(
        <div id="SubheadingInput">

            {pointHeader != "" 
            ?   <>
                    <br />
                    <h2>{pointHeader}:</h2>
                </>
            
            : <></> 
            }
            
            {content.map((point, index) => {
                
                let {text, id} = point
                
                return(
                    <div key={id}>
                        <Button color="error" className="removeButton" onClick={(e) => removePoint(e, id)}>
                            x
                        </Button>

                        <TextField
                            variant="standard"
                            value={text}
                            onChange={(e) => {changePoint(e, id)}}
                            label={"subheading " + (index + 1)}
                            fullWidth
                        />
                    </div>
                )
            })}

            <button onClick={() => addSubheading()} className="addButton">
                +
            </button>
        </div>
    )
}