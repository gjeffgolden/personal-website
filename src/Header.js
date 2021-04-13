import React from 'react'
import { Container, Avatar, Link } from '@material-ui/core'
import Background from './assets/personal-site-hero.jpg';
import Headshot from './assets/golden-headshot.JPG'
import LinkedIn from './assets/icons/linkedin-icon.jpg'
import GitHub from './assets/icons/github-icon.png'
import Instagram from './assets/icons/instagram-icon.jpg'
import Twitter from './assets/icons/twitter-icon.jpg'

export default function Header() {
    return (
        <Container maxWidth="xl" style={{height: '62.5rem', backgroundImage: `url(${Background})`}}>
            <Container maxWidth="m" style={{paddingTop: '2rem', display: 'flex', flexFlow: 'row', alignItems: 'flex-end'}}>
                <Avatar alt="Jeff Golden" src={Headshot} style={{height: '10rem', width: '10rem'}} />
                <Link href="https://www.linkedin.com/in/gjeffgolden/" target="_blank">
                    <Avatar alt="LinkedIn Icon" src={LinkedIn}/>
                </Link>
                <Link href="https://github.com/gjeffgolden" target="_blank">
                    <Avatar alt="GitHub Icon" src={GitHub}/>
                </Link>
                <Link href="https://www.instagram.com/gjeffgolden/" target="_blank">
                    <Avatar alt="Instagram Icon" src={Instagram}/>
                </Link>
                <Link href="https://www.twitter.com/gjeffgolden/" target="_blank">
                    <Avatar alt="Twitter Icon" src={Twitter}/>
                </Link>
            </Container>
        </Container>
    )
}
