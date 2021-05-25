import React from 'react';
import { Card, CardContent, Typography, Link, Container } from '@material-ui/core';
import MediumLogo from '../assets/icons/medium-logo.png';

export default function BlogCard({ headline, teaser, medium }) {

    return (
            <Link underline="none" href={medium} target="_blank" style={{display: 'flex', flexFlow: 'column', alignItems: "center", width: "18.75rem"}}>
                <Card 
                    className="blog-card"  
                    style={{display: "flex", flexWrap: "wrap", height: '18.75rem', width: "18.75rem", backgroundColor: "rgb(255, 255, 255)", margin: "0.5rem"}}
                >
                    <CardContent style={{display: "flex", flexFlow: "column", width: "100%", alignItems: "center", justifyContent: "space-around"}}>
                        <img src={MediumLogo} alt="Medium.com Logo" style={{width: "5rem"}} />
                        <Container className="blog-details" style={{textAlign: 'center', padding: '0', margin: '0'}}>
                            <Typography variant="h6">{headline}</Typography>
                            <Typography variant="body1" style={{paddingTop: '1rem'}}>{teaser}</Typography>
                        </Container>
                    </CardContent>
                </Card>
            </Link>
    )
}
