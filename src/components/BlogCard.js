import React from 'react';
import { Card, CardContent, Typography, Link, Container } from '@material-ui/core';
import MediumLogo from '../assets/icons/medium-logo.png';

export default function BlogCard({ headline, teaser, wordpress }) {

    const handleClick = (event) => {
        console.log(event.target.innerText)
    }

    return (
            <Link underline="none" href={wordpress} target="_blank" style={{display: 'flex', flexFlow: 'column', alignItems: "center", width: "100%"}}>
                <Card className="blog-card" onClick={handleClick} style={{display: "flex", height: '75px', width: "60%", backgroundColor: "rgb(255, 255, 255)"}}>
                    <CardContent className="blog-card" style={{display: "flex", flexFlow: "row", width: "100%", alignItems: "center"}}>
                        <img src={MediumLogo} alt="Medium.com Logo" style={{width: "3rem"}} />
                        <Container style={{textAlign: 'left'}}>
                            <Typography variant="h6">{headline}</Typography>
                            <Typography variant="body1">{teaser}</Typography>
                        </Container>
                    </CardContent>
                </Card>
            </Link>
    )
}
