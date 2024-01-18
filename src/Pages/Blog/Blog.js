import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    return (
        <div className='text-start'>
            <Helmet>
                <title>Blog -Ahmed's Photography</title>
            </Helmet>
            <h1 className='my-6 text-xl md:text-2xl lg:text-3xl font-semibold text-center'>These are some important Questions and Answers</h1>
            <div>
                <div className='bg-white mb-4 p-5  border-2 rounded '>
                    <h3 className='mb-4 text-2xl'><span className='font-bold'>Q1: </span>What is the difference between SQL and NoSQL?</h3>
                    <p className='text-lg'><span className='font-bold'>Ans: </span>SQL databases are a type of system software that supports management, analysis, capturing and querying the structured data in a relational format. <br />
                    NoSQL databases are a type of software that allows to maintain and retrieve structured, unstructured, polymorphic data for different purposes. SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases.</p>
                </div>
                <div className='bg-white mb-4 p-5  border-2 rounded '>
                    <h3 className='mb-4 text-2xl'><span className='font-bold'>Q2: </span>What is JWT, and how does it work?</h3>
                    <p className='text-lg'><span className='font-bold'>Ans: </span>JWT, or JSON Web Token, is an open standard used to share information between two parties securely a client and a server. In most cases, it's an encoded JSON containing a set of claims and a signature. It's usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It's also a popular way to authenticate/authorize users in a microservice architecture.</p>
                </div>
                <div className='bg-white mb-4 p-5  border-2 rounded '>
                    <h3 className='mb-4 text-2xl'><span className='font-bold'>Q3: </span>What is the difference between javascript and NodeJS?</h3>
                    <p className='text-lg'><span className='font-bold'>Ans: </span>JavaScript is a high-level programming language that makes our web pages and web applications dynamic and interactive by giving them the ability to think and act. JavaScript is a lightweight which is easy to learn syntax and object-oriented programming language whereas Node.js is a runtime environment built on google v8 engine and typically used to represent a list of objects and functions that JavaScript programs can access.JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser</p>
                </div>
                <div className='bg-white mb-4 p-5  border-2 rounded '>
                    <h3 className='mb-4 text-2xl'><span className='font-bold'>Q4: </span>How does NodeJS handle multiple requests at the same time?</h3>
                    <p className='text-lg'><span className='font-bold'>Ans: </span>NodeJS receives multiple requests and places them into the EventQueue. NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;