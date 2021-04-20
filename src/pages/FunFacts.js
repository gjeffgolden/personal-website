import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import FactCard from '../components/FactCard';

export default function FunFacts() {

    const [currentFactIndex, setCurrentFactIndex] = useState(0)

    const facts = [
        "I've summited all the 14ers in Colorado. My favorite is Mt. Sneffels via Blue Lakes and the Southwest Ridge.",
        "I met my wife, Liz, through competitive adult kickball. She kicked a triple while I was pitching.",
        "I built my own HTML websites and PCs for computer gaming as early as middle school.",
        "My favorite authors include Ellen Meloy, Barry Lopez, David Roberts and Craig Childs.",
        "I'm a wolf advocate, and I often volunteer to support reintroduction efforts and spread awareness about wolves.",
        "Charlotte, N.C., is my hometown, but I've lived in Colorado since 2009.",
        "Bojangles is a superior regional fast-food chain to In-N-Out.", 
        "My dog is a champion dock-diver and competes annually in the GoPro Mountain Games.",
        "In addition to the 14ers, I'm climbed Mt. Rainier, Mt. Hood, Mt. Adams, Gannett Peak and more than a hundred 13ers.",
        "I celebrated three years of sobriety in March 2021.",
        "Formula 1 is a newfound obsession, and I regularly wake up at 4-5 a.m. to watch live races.",
        "Favorite Pro Sports Teams: Carolina Panthers, Colorado Rockies, Colorado Avalanche, Charlotte Hornets.",
        "I'm a volunteer trip leader, instructor and elected official with the Colorado Mountain Club.",
        "Bears Ears National Monument is my happy place, and I visit at least twice a year for hiking and backpacking."
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
            className="facts-container"
            maxWidth='xl' 
            onClick={handleClick}
            style={{
                height: "fit-content", 
                width: "70%", 
                backgroundColor: "rgb(0, 0, 0, 0.8)", 
                marginTop: '7rem', 
                display: 'flex', 
                flexFlow: "column", 
                alignItems: 'center',  
                borderRadius: "6px",
                padding: '1rem'
            }}
        >
            {displayFacts()}
            <Typography variant="h6" style={{fontFamily: 'Shadows Into Light', color: 'white', marginTop: '2rem'}}>Click for more!</Typography>
        </Container>
    )
}
