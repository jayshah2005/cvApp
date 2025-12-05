import Divider from '@mui/material/Divider';

export function SectionTitle({title}){
    return(
        <>
            <h1>{title}</h1>
            <Divider sx={{ borderColor: "black", my: 1, m: 0}} flexItem/>
        </>
    )
}