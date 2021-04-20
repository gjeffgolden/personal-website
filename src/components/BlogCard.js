import React from 'react';
import { Card, CardContent, Typography, Link, Container } from '@material-ui/core';
import MediumLogo from '../assets/icons/medium-logo.png';

export default function BlogCard({ headline, teaser, wordpress }) {

    const handleClick = (event) => {
        console.log(event.target.innerText)
    }

    return (
            <Link underline="none" href={wordpress} target="_blank" style={{display: 'flex', flexFlow: 'column', alignItems: "center", width: "60%"}}>
                <Card 
                    className="blog-card" 
                    onClick={handleClick} 
                    style={{display: "flex", height: 'fit-content', width: "100%", backgroundColor: "rgb(255, 255, 255)", minWidth: "42rem", margin: '0.5rem'}}
                >
                    <CardContent style={{display: "flex", flexFlow: "row", width: "100%", alignItems: "center"}}>
                        <img src={MediumLogo} alt="Medium.com Logo" style={{width: "3rem"}} />
                        <Container className="blog-details" style={{textAlign: 'left'}}>
                            <Typography variant="h6">{headline}</Typography>
                            <Typography variant="body1">{teaser}</Typography>
                        </Container>
                    </CardContent>
                </Card>
            </Link>
    )
}
