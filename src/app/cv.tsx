import React, { useState } from "react";
import Header  from "./cvOutput/Header"
import { Education } from "./cvOutput/Education";
import { WorkExperience } from "./cvOutput/WorkExperience";
import { ProjectExperience } from "./cvOutput/ProjectExperience";

export function CV() {
    const [header, setHeader] = useState({
        name: "Jay Shah",
        subheading: ["St. Catharines", "Ontario", "(905) 347-3616", "jayshah3616@gmail.com", "linkedin.com/in/jayshah3616", "github.com/jayshah2005"]
    })

    const [education, setEducation] = useState([{   
        degree: "Honours Bachelor of Science in Computer Science Co-op (GPA: 4.0)",
        university: "Brock University",
        location: "St. Catharines",
        start_date: new Date(2023, 8, 1),
        end_date: new Date(2027, 8, 1),
        id: crypto.randomUUID()
    }])

    const [workExperience, setWorkExperience] = useState([{
        position: "Game Developer",
        company: "Zombiecraft",
        location: "Remote",
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
        start_date: new Date(2025, 4, 1), // May 2025  (month is 0-indexed)
        end_date: new Date(2025, 7, 1),   // Aug 2025
        id: crypto.randomUUID()
    },
    {
        position: "Data Science Developer",
        company:
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
            "id": "youtube_shorts_factory",
            "name": "YouTube Shorts Factory",
            "tech": [
            "Python",
            "Docker",
            "Gen AI",
            "REST API",
            "Microservices",
            ],
            "points": [
            {
                "id": "ysf_point_1",
                "text": "Engineered a multi-model automation pipeline in Docker by combining Llama 3 LLM (text), ComfyUI Generative AI (image), and Kokoro TTS (speech) to automatically generate YouTube Shorts content from a single prompt, eliminating manual editing."
            },
            {
                "id": "ysf_point_2",
                "text": "Built scalable RESTful API microservices in Python for ComfyUI and Kokoro to support containerized deployments and model orchestration."
            }
            ],
            "start_date": new Date(2025, 10, 1),
            "end_date": null
        },
        {
            "id": "virtual_dance_environment",
            "name": "Tech Lead, Virtual Dance Environment",
            "link": "https://youtube.com/watch?v=DTl2i-3Lb7o",
            "tech": [
            "Unity",
            "C#",
            "Multiplayer Networking",
            "Cephable",
            "Accessibility Tech",
            "Team Leadership",
            "XR/Interaction Systems"
            ],
            "points": [
            {
                "id": "vde_point_1",
                "text": "Led a team of 4 developers in creating a multiplayer virtual dance environment in Unity using C#, designed as a fundraising and social engagement platform for hospitalized children as part of ABoot Studio."
            },
            {
                "id": "vde_point_2",
                "text": "Integrated Cephable to provide voice commands, eye-tracking, and accessibility features, ensuring the environment was inclusive for all users."
            }
            ],
            "start_date": new Date(2025, 9, 1),
            "end_date": null
        },
        {
            "id": "coexistence",
            "name": "CoExistence",
            "link": "https://github.com/jayshah2005/CoExistence",
            "tech": [
            "Java",
            "TCP Sockets",
            "Multithreading",
            "Client-Server Architecture",
            "GUI Development",
            "Game Logic"
            ],
            "points": [
                {
                    "id": "coex_point_1",
                    "text": "Built a two-player Java game with both GUI and terminal clients using TCP sockets and multithreaded client–server communication."
                },
                {
                    "id": "coex_point_2",
                    "text": "Implemented a threaded matchmaking server to pair players and manage gameplay logic such as turn order, move validation, and scoring."
                }
            ],
            "start_date": new Date(2025, 2, 1),
            "end_date": new Date(2025, 3, 1)
        }
    ])

    return(
    <>
        <Header content={header} />
        <Education content={education} />
        <WorkExperience content={workExperience} />
        <ProjectExperience content={projectExperience} />
    </>
    )
}