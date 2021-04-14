import React from 'react'
import { Container, Card, Typography, CardMedia } from '@material-ui/core'

export default function About() {
    return (
        <Container 
            maxWidth='xl' 
            style={{height: "60%", width: "80%", backgroundColor: "rgb(0, 0, 0, .3", marginTop: '3rem', display: 'flex', flexFlow: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}
        >
            <Container>
                <Typography variant="h1">Hi. I'm Jeff.</Typography>
            </Container>
            <Card style={{height: "90%", width: "40%"}}>
                <CardMedia />
            </Card>
        </Container>
    )
}
