import React from 'react'
import { Container, Card } from '@material-ui/core'

export default function Projects() {
    return (
        <Container 
            maxWidth='xl' 
            style={{height: "60%", width: "80%", backgroundColor: "rgb(0, 0, 0, .3", marginTop: '3rem', display: 'flex', flexFlow: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}
        >
            <Card style={{height: "90%", width: "32%"}}></Card>
            <Card style={{height: "90%", width: "32%"}}></Card>
            <Card style={{height: "90%", width: "32%"}}></Card>
        </Container>
    )
}
