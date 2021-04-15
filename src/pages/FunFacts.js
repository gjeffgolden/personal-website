import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import FactCard from '../components/FactCard';

export default function FunFacts() {

    const [currentFactIndex, setCurrentFactIndex] = useState(0)

    const facts = [
        "Testing", 
        "Testing2", 
        "Testing3"
    ]

    const nextFact = () => {
        let nextIndex = currentFactIndex + 1 === facts.length ? 0 : currentFactIndex + 1
        setCurrentFactIndex(nextIndex)
    }

    const displayFacts = () => {
        const currentFact = facts[currentFactIndex]
        return <FactCard currentFact={currentFact} nextFact={nextFact} />
    }

    const handleClick = () => {
        nextFact()
    }

    return (
        <Container 
            maxWidth='xl' 
            onClick={handleClick}
            style={{height: "60%", width: "80%", backgroundColor: "rgb(0, 0, 0, 0.3)", marginTop: '3rem', display: 'flex', alignItems: 'center', justifyContent: "center"}}
        >
            {displayFacts()}
        </Container>
    )
}
