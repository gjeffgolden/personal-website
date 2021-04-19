import React from 'react'
import { Container, Avatar, Button, Typography, Link } from '@material-ui/core'
import Headshot from '../assets/golden-headshot.JPG'
import SocialMediaIcons from '../components/SocialMediaIcons'
import NavLinks from '../components/NavLinks'

export default function Header() {
    return (
            <Container id="nav-container" maxWidth='xl' style={{display: 'flex', flexFlow: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem'}}>
                <Container id="contact-card" maxWidth="md" style={{display: 'flex', flexFlow: 'row', alignItems: 'flex-end'}}>
                    <Link id="headshot" href="/">
                        <Avatar alt="Jeff Golden" src={Headshot} style={{height: '10rem', width: '10rem', border: '4px #035e06 solid'}} />
                    </Link>
                    <Container maxWidth="xs" style={{display: 'flex', flexFlow: 'column', margin: '0', width: '14.5rem', alignItems: 'center'}}>
                        <Typography variant="h5">G. Jeff Golden</Typography>
                        <Typography variant="h6" style={{fontFamily: 'Shadows Into Light'}}>Full-Stack Developer</Typography>
                        <Button href="mailto:codebygolden@gmail.com" size='small' variant='contained' style={{width: '10rem', marginBottom: '0.5rem', marginTop: '0.5rem', backgroundColor: '#035e06', color: 'white'}}>
                            Contact
                        </Button>
                        <SocialMediaIcons />
                    </Container>
                </Container>
                <NavLinks />
            </Container>
    )
}
