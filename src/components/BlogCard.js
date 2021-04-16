import React from 'react'
import { Card, CardContent, Typography, Link } from '@material-ui/core'

export default function BlogCard({ headline, teaser, wordpress, setSelectedBlog }) {

    const handleClick = (event) => {
        console.log(event.target.innerText)
    }

    return (
        <div>
            {/* <Link underline="none" href={wordpress} target="_blank"> */}
                <Card onClick={handleClick} style={{display: "flex", flexFlow: 'column', justifyContent: 'space-between', height: '300px', width: "90%"}}>
                    <CardContent>
                        <Typography variant="h4" gutterBottom={true}>{headline}</Typography>
                        <Typography variant="h5" style={{paddingTop: '1.5rem'}}>{teaser}</Typography>
                    </CardContent>
                </Card>
            {/* </Link> */}
        </div>
    )
}
