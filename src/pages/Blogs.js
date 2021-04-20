import React from 'react';
import { Container } from '@material-ui/core';
import BlogCard from '../components/BlogCard';

export default function Blogs() {

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
            wordpress: "https://gjeffgolden.medium.com/refactoring-a-class-component-to-a-functional-component-with-hooks-f279e109f630"
        },
        {
            id: 4,
            headline: "Controlled Forms in React",
            teaser: 'Understanding how component state and form inputs interact.',
            wordpress: "https://gjeffgolden.medium.com/controlled-forms-in-react-e1d977d39fba"
        }
    ]

    const displayBlogs = () => {
        return blogs.map(blog => 
            <BlogCard 
                key={blog.id} 
                headline={blog.headline} 
                teaser={blog.teaser} 
                wordpress={blog.wordpress}  
            /> 
        )
    }

    return (
        <Container 
            maxWidth='xl' 
            className="blog-container"
            style={{
                height: "fit-content", 
                width: "70%", 
                marginTop: '3rem', 
                display: 'flex', 
                flexFlow: 'column', 
                justifyContent: 'space-around', 
                alignItems: 'center', 
                borderRadius: '6px',
            }}
        >
            {displayBlogs()}
        </Container>
    )
}
