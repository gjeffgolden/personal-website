import React from 'react'
import { Container, Button, ButtonGroup } from '@material-ui/core'

export default function NavLinks() {
    return (
        <Container maxWidth='sm' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0'}}>
            <ButtonGroup variant="text" size='large'>
                <Button style={{fontSize: '1.5rem'}}>About</Button>
                <Button style={{fontSize: '1.5rem'}}>Projects</Button>
                <Button style={{fontSize: '1.5rem'}}>Blogs</Button>
                <Button style={{fontSize: '1.5rem'}}>Playground</Button>
            </ButtonGroup>
        </Container>
    )
}
