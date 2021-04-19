import React from 'react'
import { Container, Avatar, Link } from '@material-ui/core'
import LinkedIn from '../assets/icons/linkedin-icon.jpg'
import GitHub from '../assets/icons/github-icon.png'
import Instagram from '../assets/icons/instagram-icon.jpg'
import Twitter from '../assets/icons/twitter-icon.jpg'

export default function SocialMediaIcons() {
    return (
        <Container maxWidth="sm" disableGutters={true} style={{display: 'flex', flexFlow: 'row', justifyContent: 'center', paddingTop: '0.5rem'}}>
            <Link href="https://www.linkedin.com/in/gjeffgolden/" target="_blank">
                <Avatar className="social-icon" alt="LinkedIn Icon" src={LinkedIn}/>
            </Link>
            <Link href="https://github.com/gjeffgolden" target="_blank">
                <Avatar className="social-icon" alt="GitHub Icon" src={GitHub}/>
            </Link>
            <Link href="https://www.instagram.com/gjeffgolden/" target="_blank">
                <Avatar className="social-icon" alt="Instagram Icon" src={Instagram}/>
            </Link>
            <Link href="https://www.twitter.com/gjeffgolden/" target="_blank">
                <Avatar className="social-icon" alt="Twitter Icon" src={Twitter}/>
            </Link>
        </Container>
    )
}
