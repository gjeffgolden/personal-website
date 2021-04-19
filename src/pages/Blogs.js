import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import BlogCard from '../components/BlogCard';

export default function Blogs() {

    const [selectedBlog, setSelectedBlog] = useState({});
    const [isBlogSelected, setIsBlogSelected] = useState(false);

    const blogs = [
        {
            id: 1,
            headline: "Forking My Life",
            teaser: 'Why transition from a successful digital marketing career to coding?',
            wordpress: "https://gjeffgolden.medium.com/forking-my-life-49c97583c9ca"
        },
        {
            id: 2,
            headline: "A Beginner's Guide to JavaScript Event Delegation",
            teaser: 'Stop! Propagate, and listen.',
            wordpress: "https://gjeffgolden.medium.com/a-beginners-guide-to-javascript-event-delegation-85545d943a23"
        },
        {
            id: 3,
            headline: "Refactoring a Class Component to a Functional Component",
            teaser: 'Sink your hooks into this one.',
            wordpress: "https://iceandtrail.com/2021/03/18/refactoring-a-class-component-to-a-functional-component-in-react-with-hooks/"
        },
        {
            id: 4,
            headline: "Controlled Forms in React",
            teaser: 'Understanding how component state and forms inputs interact.',
            wordpress: "https://iceandtrail.com/2021/03/30/controlled-forms-in-react/"
        }
    ]

    const displayBlogs = () => {
        return blogs.map(blog => 
            <BlogCard 
                key={blog.id} 
                headline={blog.headline} 
                teaser={blog.teaser} 
                wordpress={blog.wordpress} 
                setSelectedBlog={setSelectedBlog} 
            /> 
        )
    }

    return (
        <Container 
            maxWidth='xl' 
            style={{height: "350px", width: "80%", backgroundColor: "rgb(0, 0, 0, .3", marginTop: '5rem', display: 'flex', flexFlow: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: '6px'}}
        >
            {isBlogSelected ? null : displayBlogs()}
        </Container>
    )
}
