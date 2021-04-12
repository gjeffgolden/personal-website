import React from 'react'
import { Container } from '@material-ui/core'
import Background from './assets/personal-site-hero.jpg';

export default function Header() {
    return (
        <Container maxWidth="xl" style={{height: '62.5rem', backgroundImage: `url(${Background})`}}>

        </Container>
    )
}
