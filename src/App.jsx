import { useState } from 'react'
import { CV } from './app/cv'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [count, setCount] = useState(0)

  const theme = createTheme()

  return (
    <ThemeProvider theme={theme}>
      <CV />
    </ThemeProvider>
  )
}

export default App
