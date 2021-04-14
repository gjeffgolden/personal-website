import React from 'react';
import { Typography } from '@material-ui/core';

export default function FactCard({ currentFact }) {

    return (
        <Typography variant="h2">{currentFact}</Typography>
    )
}
