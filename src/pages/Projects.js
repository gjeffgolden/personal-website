import React from 'react';
import { Container } from '@material-ui/core';
import ProjectCard from '../components/ProjectCard';
import GearClosetPhoto from '../assets/proj-5.PNG';
import SingletrackPhoto from '../assets/proj-4.PNG';
import MySummitsPhoto from '../assets/proj-3.PNG';

export default function Projects() {

    const projects = [
        {
            id: 1,
            title: "Gear Closet",
            screenshot: GearClosetPhoto,
            github: "https://github.com/gjeffgolden/gear-closet-frontend",
            description: "An inventory system for tracking the life cycle of outdoor gear, using React, Django, Material-UI and Firebase."
        },
        {
            id: 2,
            title: "Singletrack",
            screenshot: SingletrackPhoto,
            github: "https://github.com/gjeffgolden/singletrack-frontend",
            description: "A task-management app for coding students featuring a circular countdown timer and drag-and-drop functionality."
        },
        {
            id: 3,
            title: "mySummits",
            screenshot: MySummitsPhoto,
            github: "https://github.com/gjeffgolden/14ers-tracker-frontend",
            description: "A summit registry and live peak conditions site built with Rails and only one week's knowledge of JavaScript."
        }
    ]

    const displayProjects = () => {
        return projects.map(project => <ProjectCard key={project.id} title={project.title} screenshot={project.screenshot} github={project.github} description={project.description} />)
    }

    return (
        <Container 
            className="project-container"
            maxWidth='xl' 
            style={{height: "fit-content", width: "80%", marginTop: '5rem', display: 'flex', flexFlow: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: '6px'}}
        >
            {displayProjects()}
        </Container>
    )
}
