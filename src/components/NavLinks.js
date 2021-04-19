import React from 'react';
import { Container, Button, ButtonGroup } from '@material-ui/core';

export default function NavLinks() {

    return (
        <Container id="nav-links" maxWidth='sm' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0'}}>
            <ButtonGroup id="nav-buttons" variant="text" size='large'>
                <Button className="nav-link" href="/about" style={{fontFamily: 'Shadows Into Light', fontSize: '1.5rem'}}>About</Button>
                <Button className="nav-link" href="/projects" style={{fontFamily: 'Shadows Into Light', fontSize: '1.5rem'}}>Projects</Button>
                <Button className="nav-link" href="/blogs" style={{fontFamily: 'Shadows Into Light', fontSize: '1.5rem'}}>Blogs</Button>
                <Button className="nav-link" href="/funfacts" style={{fontFamily: 'Shadows Into Light', fontSize: '1.5rem'}}>Fun Facts</Button>
            </ButtonGroup>
        </Container>
    )
}
