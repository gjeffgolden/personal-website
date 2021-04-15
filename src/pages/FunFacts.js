import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import FactCard from '../components/FactCard';

export default function FunFacts() {

    const [currentFactIndex, setCurrentFactIndex] = useState(0)

    const facts = [
        "I've summited all the 14ers in Colorado. My favorite is Mt. Sneffels.",
        "I met my wife, Liz, through competitive adult kickball. She kicked a triple while I was pitching.", 
        "My favorite authors include Ellen Meloy, Barry Lopez, David Roberts, and Craig Childs.",
        "I'm a wolf advocate and often volunteer to spread awareness about wolves and support reintroduction efforts.",
        "Charlotte, N.C., is my hometown, but I've lived in Colorado since 2009.",
        "Bojangles is a superior regional fast-food chain to In-N-Out.", 
        "My dog is a champion dock-diver and competes annually in the GoPro Mountain Games.",
        "In addition to the 14ers, I'm climbed Mt. Rainier, Mt. Hood, Mt. Adams, Gannett Peak and more than a hundred 13ers.",
        "I celebrated three years of sobriety in March 2021.",
        "Formula 1 is a newfound obsession, and I regularly wake up at 4-5 a.m. to watch live races.",
        "I'm the biggest Carolina Panthers fan you'll ever meet. Existing in Denver after Super Bowl 50 was pure agony.",
        "I'm a volunteer trip leader and instructor with the Colorado Mountain Club."
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
            style={{height: "300px", width: "80%", backgroundColor: "rgb(0, 0, 0, 0.5)", marginTop: '5rem', display: 'flex', flexFlow: "column", alignItems: 'center', justifyContent: 'space-evenly'}}
        >
            {displayFacts()}
            <Typography variant="h6" style={{fontFamily: 'Shadows Into Light', color: 'white'}}>Click for more!</Typography>
        </Container>
    )
}
