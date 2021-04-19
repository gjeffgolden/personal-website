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
            style={{height: "60vh", width: "80vw", marginTop: '3rem', display: 'flex', flexFlow: 'column', justifyContent: 'space-evenly', alignItems: 'center'}}
        >
            <Typography className="name-greeting" variant="h1" style={{alignSelf: 'center', fontFamily: "Karantina"}}>👋🤘✌</Typography>
            <Container maxWidth="xl" style={{textAlign: "left", height: '80%', display: 'flex', flexFlow: 'row', alignItems: "center", justifyContent: 'space-evenly'}}>
                <Container id="list-container" maxWidth="lg" disableGutters={true} style={{display: 'flex', flexFlow: 'column', backgroundColor: "rgb(0, 0, 0, 0.8", paddingLeft: "0.5rem", height: 'fit-content', width: "80%", borderRadius: '6px'}}>
                    <Typography gutterBottom={true} variant="h6" style={{color: "white"}}>
                        <DoneAllIcon style={{marginRight: "1rem", fontSize: '3rem'}} />   
                        React, Redux, JavaScript, TypeScript, Vue, Rails, Django, GitHub, Firebase
                    </Typography>
                    <Typography gutterBottom={true} variant="h6" style={{color: "white"}}>
                        <EmojiPeopleIcon style={{marginRight: "1rem", fontSize: "3rem"}} />   
                        Proven teammate and leader across multiple industries
                    </Typography>
                    <Typography gutterBottom={true} variant="h6" style={{color: "white"}}>
                        <SearchIcon style={{marginRight: "1rem", fontSize: "3rem"}} />   
                        Professional writer and editor with an eye for clean, readable, typo-free code
                    </Typography>
                    <Typography gutterBottom={true} variant="h6" style={{color: "white"}}>
                        <WebIcon style={{marginRight: "1rem", fontSize: "3rem"}} />   
                        Digital marketing expert with a decade of content-management experience
                    </Typography>
                    <Typography gutterBottom={true} variant="h6" style={{color: "white"}}>
                        <FilterHdrIcon style={{marginRight: "1rem", fontSize: "3rem"}} />   
                        Avid mountaineer, backpacker, conservationist and 14er Finisher
                    </Typography>
                </Container>
                <Card id="lifestyle-photo" style={{height: "90%", width: "30%", marginLeft: '1rem'}}>
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
        </Container>
    )
}
