import React from 'react';
import { Container, Card, Typography, CardMedia } from '@material-ui/core';
import LifestylePhoto from '../assets/jeff-and-zia.jpg';
import SkillList from '../components/SkillList';

export default function About() {
    return (
        <Container 
            id="content-container"
            maxWidth='xl' 
            style={{height: "60vh", width: "80vw", marginTop: '3rem', display: 'flex', flexFlow: 'column', justifyContent: 'space-evenly', alignItems: 'center'}}
        >
            <Typography className="name-greeting" variant="h1" style={{alignSelf: 'center'}}>👋🤘✌</Typography>
            <Container maxWidth="xl" style={{textAlign: "left", height: '80%', display: 'flex', flexFlow: 'row', alignItems: "center", justifyContent: 'space-evenly'}}>
                <SkillList />
                <Card id="lifestyle-photo" style={{height: "90%", width: "30%", marginLeft: '1rem'}}>
                    <CardMedia
                        component="img"
                        alt="Jeff and Zia the dog in Utah"
                        height="fill"
                        image={LifestylePhoto}
                        title="Jeff and Zia in Mary Jane Canyon"
                        style={{height: "100%", width: '100%'}}
                    />
                </Card>
            </Container>
        </Container>
    )
}
