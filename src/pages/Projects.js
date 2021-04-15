import React from 'react';
import { Container } from '@material-ui/core';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {

    const projects = [
        {
            id: 1,
            title: "Gear Closet",
            screenshot: "https://firebasestorage.googleapis.com/v0/b/gear-closet-photos.appspot.com/o/images%2FProj5.PNG?alt=media&token=b50bc891-e58b-4868-9168-6515a9c5fc80",
            github: "https://github.com/gjeffgolden/gear-closet-frontend",
            description: "An inventory system for tracking the life cycle of outdoor gear, using React, Django, Material-UI and Firebase."
        },
        {
            id: 2,
            title: "Singletrack",
            screenshot: "https://firebasestorage.googleapis.com/v0/b/gear-closet-photos.appspot.com/o/images%2FProj4.PNG?alt=media&token=36fa7a7f-1a96-4100-a0eb-1181690bb2b5",
            github: "https://github.com/gjeffgolden/singletrack-frontend",
            description: "A task-management app for coding students featuring a circular countdown timer and drag-and-drop functionality."
        },
        {
            id: 3,
            title: "mySummits",
            screenshot: "https://firebasestorage.googleapis.com/v0/b/gear-closet-photos.appspot.com/o/images%2FProj3.PNG?alt=media&token=b87821cb-6bde-431c-a80f-864bbf2989ee",
            github: "https://github.com/gjeffgolden/14ers-tracker-frontend",
            description: "A summit registry and live peak conditions site built with Rails and only one week's knowledge of JavaScript."
        }
    ]

    const displayProjects = () => {
        return projects.map(project => <ProjectCard key={project.id} title={project.title} screenshot={project.screenshot} github={project.github} description={project.description} />)
    }

    return (
        <Container 
            maxWidth='xl' 
            style={{height: "400px", width: "80%", backgroundColor: "rgb(0, 0, 0, .3", marginTop: '5rem', display: 'flex', flexFlow: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: '6px'}}
        >
            {displayProjects()}
        </Container>
    )
}
