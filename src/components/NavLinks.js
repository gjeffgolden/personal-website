import React from 'react';
import { Container, Button, ButtonGroup } from '@material-ui/core';

export default function NavLinks() {
    return (
        <Container maxWidth='sm' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0'}}>
            <ButtonGroup variant="text" size='large'>
                <Button href="/about" style={{fontFamily: 'Shadows Into Light', fontSize: '1.5rem'}}>About</Button>
                <Button href="/projects" style={{fontFamily: 'Shadows Into Light', fontSize: '1.5rem'}}>Projects</Button>
                <Button href="/blogs" style={{fontFamily: 'Shadows Into Light', fontSize: '1.5rem'}}>Blogs</Button>
                <Button href="/funfacts" style={{fontFamily: 'Shadows Into Light', fontSize: '1.5rem'}}>Fun Facts</Button>
            </ButtonGroup>
        </Container>
    )
}
