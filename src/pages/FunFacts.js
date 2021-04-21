import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import FactCard from '../components/FactCard';

export default function FunFacts() {

    const [currentFactIndex, setCurrentFactIndex] = useState(0)

    const facts = [
        "I've summited all the 14ers in Colorado. My favorite is Mt. Sneffels via Blue Lakes and the Southwest Ridge.",
        "I met my wife, Liz, through adult kickball. She kicked a triple while I was pitching.",
        "I built my own HTML websites and gaming PCs as early as middle school.",
        "My favorite nonfiction authors include Ellen Meloy, Barry Lopez, David Roberts and Craig Childs.",
        "I'm a wolf advocate, and I often volunteer to support reintroduction efforts and spread awareness about wolves.",
        "Charlotte, N.C., is my hometown, but I've lived in Colorado since 2009.",
        "My current favorite fiction book series is a tie between The Expanse and The Stormlight Archive.",
        "One of my proudest coding achievements is spinning up a Django backend, with auth, in two days despite never coding a line of Python in my life.", 
        "My dog is a champion dock-diver and competes annually in the GoPro Mountain Games.",
        "In addition to the 14ers, I've climbed Mt. Rainier, Mt. Hood, Mt. Adams, Gannett Peak and more than a hundred 13ers.",
        "I celebrated three years of sobriety in March 2021.",
        "RPGs are my favorite type of video game. I'm a sucker for old-school classics like Chrono Trigger, FFVII and EverQuest.",
        "I'm a volunteer trip leader, instructor and elected councilmember with the Colorado Mountain Club.",
        "Formula 1 is a newfound obsession, and I regularly wake up at 4-5 a.m. to watch live races.",
        "My favorite sports teams are the Carolina Panthers, Colorado Rockies, Colorado Avalanche and Charlotte Hornets.",
        "Bears Ears National Monument is my happy place. I visit at least twice a year for hiking and backpacking."
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
