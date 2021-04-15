import React from 'react'
import { Container, Card, Typography, CardMedia } from '@material-ui/core'
import DoneAllIcon from '@material-ui/icons/DoneAll';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import SearchIcon from '@material-ui/icons/Search';
import WebIcon from '@material-ui/icons/Web';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';

export default function About() {
    return (
        <Container 
            id="content-container"
            maxWidth='xl' 
            style={{height: "70vh", width: "80vw", backgroundColor: "rgb(0, 0, 0, .1", marginTop: '3rem', display: 'flex', flexFlow: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}
        >
            <Container maxWidth="lg" style={{textAlign: "left", height: "fit-content", display: 'flex', flexFlow: 'column'}}>
                <Typography className="name-greeting" variant="h1" gutterBottom={true} style={{alignSelf: 'center'}}>Hi. I'm Jeff.</Typography>
                <Container id="list-container" maxWidth="lg" disableGutters={true} style={{backgroundColor: "rgb(0, 0, 0, .6", paddingLeft: "1rem"}}>
                    <Typography gutterBottom={true} variant="h5" style={{color: "white"}}>
                        <DoneAllIcon style={{marginRight: "1rem", fontSize: '3rem'}} />   
                        React, Redux, JavaScript, TypeScript, Vue, Rails, Django, GitHub, Firebase
                    </Typography>
                    <Typography gutterBottom={true} variant="h5" style={{color: "white"}}>
                        <EmojiPeopleIcon style={{marginRight: "1rem", fontSize: "3rem"}} />   
                        Proven teammate and leader across multiple industries
                    </Typography>
                    <Typography gutterBottom={true} variant="h5" style={{color: "white"}}>
                        <SearchIcon style={{marginRight: "1rem", fontSize: "3rem"}} />   
                        Professional writer and editor with an eye for clean, readable, typo-free code
                    </Typography>
                    <Typography gutterBottom={true} variant="h5" style={{color: "white"}}>
                        <WebIcon style={{marginRight: "1rem", fontSize: "3rem"}} />   
                        Digital marketing expert with a decade of content management experience
                    </Typography>
                    <Typography gutterBottom={true} variant="h5" style={{color: "white"}}>
                        <FilterHdrIcon style={{marginRight: "1rem", fontSize: "3rem"}} />   
                        Avid mountaineer, backpacker, conservationist and 14er Finisher
                    </Typography>
                </Container>
            </Container>
            <Card id="lifestyle-photo" style={{height: "90%", width: "40%"}}>
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
