import React from 'react'
import { Container, Avatar, Button, Typography } from '@material-ui/core'
import Background from '../assets/personal-site-hero.jpg';
import Headshot from '../assets/golden-headshot.JPG'
import SocialMediaIcons from '../components/SocialMediaIcons'
import NavLinks from '../components/NavLinks'

export default function Header() {
    return (
        <Container maxWidth="xl" style={{height: '62.5rem', backgroundImage: `url(${Background})`}}>
            <Container maxWidth='xl' style={{display: 'flex', flexFlow: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem'}}>
                <Container maxWidth="m" style={{display: 'flex', flexFlow: 'row', alignItems: 'flex-end'}}>
                    <Avatar alt="Jeff Golden" src={Headshot} style={{height: '10rem', width: '10rem'}} />
                    <Container maxWidth="xs" style={{display: 'flex', flexFlow: 'column', margin: '0', width: '14.5rem', alignItems: 'center'}}>
                        <Typography variant="h5">G. Jeff Golden</Typography>
                        <Typography variant="body1" gutterBottom="true">Full-Stack Developer</Typography>
                        <Button href="mailto:codebygolden@gmail.com" size='small' variant='contained' style={{width: '10rem', marginBottom: '1rem', marginTop: '0.5rem', backgroundColor: '#035e06', color: 'white'}}>
                            Contact
                        </Button>
                        <SocialMediaIcons />
                    </Container>
                </Container>
                <NavLinks />
            </Container>
        </Container>
    )
}
