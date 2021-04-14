import React from 'react'
import { Container, Card, Typography, CardMedia } from '@material-ui/core'

export default function About() {
    return (
        <Container 
            maxWidth='xl' 
            style={{height: "60%", width: "80%", backgroundColor: "rgb(0, 0, 0, .1", marginTop: '3rem', display: 'flex', flexFlow: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}
        >
            <Container maxWidth="lg" style={{textAlign: "left", height: "95%", display: 'flex', flexFlow: 'column'}}>
                <Typography variant="h1">Hi. I'm Jeff.</Typography>
                <Typography variant="h4">Hi. I'm Jeff.</Typography>
                <Typography variant="h4">Hi. I'm Jeff.</Typography>
                
            </Container>
            <Card style={{height: "90%", width: "40%"}}>
                <CardMedia
                    component="img"
                    alt="Jeff and Zia the dog in Utah"
                    height="fill"
                    image="https://firebasestorage.googleapis.com/v0/b/gear-closet-photos.appspot.com/o/images%2FIMG_2049.jpg?alt=media&token=e03c89f0-cefd-4055-930a-d42e3e38d642"
                    title="Jeff and Zia in Mary Jane Canyon"
                    style={{height: "100%", width: '100%'}}
                />
            </Card>
        </Container>
    )
}
