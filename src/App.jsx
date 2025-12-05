import { useState } from 'react'
import { CV } from './app/cv'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Inputs } from './app/inputs/Inputs'

function App() {
  const [count, setCount] = useState(0)

  const theme = createTheme()

  return (
    <ThemeProvider theme={theme}>
      <Inputs />
      <CV />
    </ThemeProvider>
  )
}

export default App
