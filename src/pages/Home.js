import React, { useState, useEffect } from 'react';
import '../components/Home.css';
// import { images } from '../assets/images';
// import projects from '../assets/projects.json';
import { motion } from 'framer-motion';
import Tree from '../assets/images/Tree.png';
import Projects from '../sections/Projects';
import ParticlesComponent from '../components/Particles';

const projects = [
    {
        "name": "Portfolio Website",
        "image": Tree
    },
    {
        "name": "E-Commerce Store",
        "image": Tree
    },
    {
        "name": "Blog Platform",
        "image": Tree
    },
    {
        "name": "Weather App",
        "image": Tree
    },
    {
        "name": "Task Manager",
        "image": Tree
    }
]

const Home = () => {
    return (
        <>
            <div className='background-animated'>
                <ParticlesComponent id='particles' />
            </div>
            <div className="home-container-first telma-font">
                <h1 className="home-name">Diego Tsukayama</h1>
                <h2 className="home-paragraph">
                    <p className="home-paragraph-content">My name is Diego, and I am 23 years old. I am an international student studying Computer Programming at George Brown College.</p>
                </h2>
            </div>
            <div className='home-container-second telma-font'>
                <h1 className='second-title'>My Projects</h1>
                {/* <p className='fan-card'>Fan Card?</p> */}
                <div className='projects'>
                    {projects.map((project, index) => (
                        <motion.div
                            whileInView={{ opacity: 1}}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5, type: 'tween'}}
                            key={project.name + index}
                            className='project-item'
                        >
                            <h2>{project.name}</h2>
                            <img src={project.image} alt={project.name} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
