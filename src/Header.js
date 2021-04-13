import React from 'react'
import { Container, Avatar, Button } from '@material-ui/core'
import Background from './assets/personal-site-hero.jpg';
import Headshot from './assets/golden-headshot.JPG'
import SocialMediaIcons from './components/SocialMediaIcons'

export default function Header() {
    return (
        <Container maxWidth="xl" style={{height: '62.5rem', backgroundImage: `url(${Background})`}}>
            <Container maxWidth="m" style={{paddingTop: '2rem', display: 'flex', flexFlow: 'row', alignItems: 'flex-end'}}>
                <Avatar alt="Jeff Golden" src={Headshot} style={{height: '10rem', width: '10rem'}} />
                <Container maxWidth="sm" style={{display: 'flex', flexFlow: 'column', margin: '0'}}>
                    <Button href="mailto:codebygolden@gmail.com" size='small' variant='contained' style={{width: '10rem', marginBottom: '0.25rem', backgroundColor: '#035e06', color: 'white'}}>Contact</Button>
                    <SocialMediaIcons />
                </Container>
            </Container>
        </Container>
    )
}
