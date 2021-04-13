import React from 'react'
import { Typography, Container } from '@material-ui/core'

export default function Home() {
    return (
        <Container maxWidth="md" style={{height: '70%', display: 'flex', flexFlow: 'column', justifyContent: 'flex-end', marginLeft: '6rem', minHeight: '525px'}}>
            <Container maxWidth='xs' disableGutters={true} style={{width: '20rem', margin: '0', display: 'flex', flexFlow: 'column'}}>
                <Typography style={{fontFamily: 'Shadows Into Light', fontSize: '1.75rem', color: 'white'}}>
                    “Everything is held together with stories. That is all that is holding us together, stories and compassion.”
                </Typography>
                <Typography style={{fontFamily: 'Shadows Into Light', color: 'white'}}>
                    -Barry Lopez
                </Typography>
            </Container>
        </Container>
    )
}
