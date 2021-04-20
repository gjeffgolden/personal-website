import React from 'react';
import { Container, Typography } from '@material-ui/core';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import SearchIcon from '@material-ui/icons/Search';
import WebIcon from '@material-ui/icons/Web';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';

export default function SkillList() {
    return (
        <Container id="list-container" maxWidth="lg" disableGutters={true} style={{display: 'flex', flexFlow: 'column', backgroundColor: "rgb(0, 0, 0, 0.9)", paddingLeft: "0.5rem", height: 'fit-content', width: "80%", borderRadius: '6px'}}>
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
    )
}
