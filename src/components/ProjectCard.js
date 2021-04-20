import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';

export default function ProjectCard({ title, screenshot, github, description }) {
    return (
            <Card className="project-card" style={{height: 'fit-content', width: "90%", border: '1px solid black', margin: "1rem"}}>
                <CardMedia
                    className="project-image"
                    component="img"
                    image={screenshot}
                    title={title}
                />
                <CardContent>
                    <Typography variant="h5" gutterBottom={true}>{title}</Typography>
                    <Typography variant="body1">{description}</Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium" color="primary" fullWidth={true} href={github} target="_blank">
                        View on GitHub
                    </Button>
                </CardActions>
            </Card>
    )
}
