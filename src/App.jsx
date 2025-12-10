import { useState } from 'react'
import { OutputCV } from './app/cvOutput/cvOutput'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { InputCV } from './app/cvInputs/Inputs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {

  const theme = createTheme()

      const [header, setHeader] = useState({
        name: "Jay Shah",
        subheading: [
            { id: crypto.randomUUID(), text: "St. Catharines, Ontario" },
            { id: crypto.randomUUID(), text: "(905) 347-3616" },
            { id: crypto.randomUUID(), text: "jayshah3616@gmail.com" },
            { id: crypto.randomUUID(), text: "linkedin.com/in/jayshah3616" },
            { id: crypto.randomUUID(), text: "github.com/jayshah2005" }
        ]
    })

    const [education, setEducation] = useState([{   
        subtitle: "Honours Bachelor of Science in Computer Science Co-op (GPA: 4.0)",
        title: "Brock University",
        location: "St. Catharines",
        start_date: new Date(2023, 8, 1),
        end_date: new Date(2027, 8, 1),
        id: crypto.randomUUID()
    }])

    const [workExperience, setWorkExperience] = useState([{
        subtitle: "Game Developer",
        title: "Zombiecraft",
        location: "Remote",
        start_date: new Date(2025, 4, 1), // May 2025  (month is 0-indexed)
        end_date: new Date(2025, 7, 1),   // Aug 2025
        id: crypto.randomUUID(),
        points: [
            {
            id: crypto.randomUUID(),
            text:
                "Implemented hierarchical pathfinding A* algorithm using Kotlin coroutines to optimize for server responsiveness under load and to facilitate custom 3D navigation for AI zombie entities overcoming limitations of Minecraft’s Native 2D pathfinding."
            },
            {
            id: crypto.randomUUID(),
            text:
                "Refactored comrade entity system by removing 2 deprecated classes and decoupling perk and entity logic into separate modules by following clean architecture principles to improve code modularity, maintainability and extensibility."
            },
            {
            id: crypto.randomUUID(),
            text:
                "Developed in-game spawn point configuration tool to pre-set player spawn locations to simplify custom map creation."
            }
        ],
    },
    {
        subtitle: "Data Science Developer",
        title:
        "Ministry of Public and Business Service Delivery and Procurement",
        location: "St. Catharines",
        points: [
        {
            id: crypto.randomUUID(),
            text:
            "Implemented hierarchical pathfinding A* algorithm using Kotlin coroutines to optimize for server responsiveness under load and to facilitate custom 3D navigation for AI zombie entities overcoming limitations of Minecraft’s Native 2D pathfinding.",
        },
        {
            id: crypto.randomUUID(),
            text:
            "Refactored comrade entity system by removing 2 deprecated classes and decoupling perk and entity logic into separate modules by following clean architecture principles to improve code modularity, maintainability and extensibility.",
        },
        {
            id: crypto.randomUUID(),
            text:
            "Developed in-game spawn point configuration tool in Kotlin to pre-set player spawn locations to simplify custom map creation.",
        },
        ],
        start_date: new Date(2023, 8, 1),
        end_date: new Date(2027, 8, 1),
        id: crypto.randomUUID(),
    }]);

    const [projectExperience, setProjectExperience] = useState([
        {
            id: crypto.randomUUID(),
            "title": "YouTube Shorts Factory",
            "points": [
            {
                "id": crypto.randomUUID(),
                "text": "Engineered a multi-model automation pipeline in Docker by combining Llama 3 LLM (text), ComfyUI Generative AI (image), and Kokoro TTS (speech) to automatically generate YouTube Shorts content from a single prompt, eliminating manual editing."
            },
            {
                "id": crypto.randomUUID(),
                "text": "Built scalable RESTful API microservices in Python for ComfyUI and Kokoro to support containerized deployments and model orchestration."
            }
            ],
            "start_date": new Date(2025, 10, 1),
            "end_date": null
        },
        {
            "id": crypto.randomUUID(),
            title: "Tech Lead, Virtual Dance Environment",
            "link": "https://youtube.com/watch?v=DTl2i-3Lb7o",
            "points": [
            {
                "id": crypto.randomUUID(),
                "text": "Led a team of 4 developers in creating a multiplayer virtual dance environment in Unity using C#, designed as a fundraising and social engagement platform for hospitalized children as part of ABoot Studio."
            },
            {
                "id": crypto.randomUUID(),
                "text": "Integrated Cephable to provide voice commands, eye-tracking, and accessibility features, ensuring the environment was inclusive for all users."
            }
            ],
            "start_date": new Date(2025, 9, 1),
            "end_date": null
        },
        {
            id: "coexistence",
            title: "CoExistence",
            link: "https://github.com/jayshah2005/CoExistence",
            points: [
                {
                    id: crypto.randomUUID(),
                    text: "Built a two-player Java game with both GUI and terminal clients using TCP sockets and multithreaded client–server communication."
                },
                {
                    id: crypto.randomUUID(),
                    text: "Implemented a threaded matchmaking server to pair players and manage gameplay logic such as turn order, move validation, and scoring."
                }
            ],
            start_date: new Date(2025, 2, 1),
            end_date: new Date(2025, 3, 1)
        }
    ])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
            <InputCV
            header={header}
            setHeader={setHeader}

            education={education}
            setEducation={setEducation}

            workExperience={workExperience}
            setWorkExperience={setWorkExperience}

            projectExperience={projectExperience}
            setProjectExperience={setProjectExperience}
            />
            <OutputCV header={header} education={education} workExperience={workExperience} projectExperience={projectExperience} />
        </ThemeProvider>
    </LocalizationProvider>
  )
}

export default App
