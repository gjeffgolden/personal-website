import React from 'react';
import { Container } from '@material-ui/core';
import BlogCard from '../components/BlogCard';

export default function Blogs() {

    const blogs = [
        {
            id: 1,
            headline: "Forking My Life",
            teaser: 'Why transition from a successful digital marketing career to coding?',
            medium: "https://gjeffgolden.medium.com/forking-my-life-49c97583c9ca"
        },
        {
            id: 2,
            headline: "A Beginner's Guide to JavaScript Event Delegation",
            teaser: 'Stop! Propagate, and listen.',
            medium: "https://gjeffgolden.medium.com/a-beginners-guide-to-javascript-event-delegation-85545d943a23"
        },
        {
            id: 3,
            headline: "Refactoring a Class Component to a Functional Component",
            teaser: 'Sink your hooks into this one.',
            medium: "https://gjeffgolden.medium.com/refactoring-a-class-component-to-a-functional-component-with-hooks-f279e109f630"
        },
        {
            id: 4,
            headline: "Controlled Forms in React",
            teaser: 'Understanding how component state and form inputs interact.',
            medium: "https://gjeffgolden.medium.com/controlled-forms-in-react-e1d977d39fba"
        },
        {
            id: 5,
            headline: "Responsive Web Design Fundamentals",
            teaser: "An introduction to rems, ems and media queries.",
            medium: "https://gjeffgolden.medium.com/responsive-design-fundamentals-1fc669636df7"
        },
        {
            id: 6,
            headline: "JSX and the Virtual DOM: Under the Hood",
            teaser: "A deeper dive into how the React magic happens.",
            medium: "https://gjeffgolden.medium.com/jsx-and-the-virtual-dom-a-peek-under-the-hood-9a5cd931a0e6"
        }
    ]

    const displayBlogs = () => {
        return blogs.map(blog => 
            <BlogCard 
                key={blog.id} 
                headline={blog.headline} 
                teaser={blog.teaser} 
                medium={blog.medium}  
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
