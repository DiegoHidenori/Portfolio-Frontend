import React, { useState, useEffect } from "react";
import "../components/Home.css";
// import { images } from '../assets/images';
// import projects from '../assets/projects.json';
import { easeOut, motion, useScroll, useTransform } from "framer-motion";
import Tree from "../assets/images/Tree.png";
import Portrait from "../assets/images/Portrait.jpg";
import Projects from "../sections/Projects";
import ScrollToTop from "../components/ScrollToTop";
import ScrollProgress from "../components/ScrollProgress";
import ScrollReveal from "../components/ScrollReveal";
import HorizontalScroll from "../components/HorizontalScroll";

// const [toggleState, setToggleState] = useState(1);

// const toggleTab = (index) => {
//     setToggleState(index);
// };

const projects = [
    {
        name: "MERN Stack Application",
        image: Tree,
        url: "https://github.com/DiegoHidenori/MERN-Stack-Employees",
    },
    {
        name: "Spring Boot Microservices",
        image: Tree,
        url: "https://github.com/DiegoHidenori/SpringBoot-Microservices-Orders",
    },
    {
        name: "Weather Website",
        image: Tree,
        url: "https://github.com/DiegoHidenori/React-Weather-API",
    },
    {
        name: "Swift",
        image: Tree,
        url: "https://github.com/DiegoHidenori/COMP-3097-FinalProject-G70",
    },
    {
        name: "React Native",
        image: Tree,
        url: "https://github.com/DiegoHidenori/COMP-3074-G36-GroupProject",
    },
];

const capstoneDocs = [
    {
        name: "Project Summary",
        image: Tree,
        doc: "/documents/Project Summary.docx",
    },
    {
        name: "Project Vision",
        image: Tree,
        doc: "/documents/Project Vision.docx",
    },
    {
        name: "Business Requirements",
        image: Tree,
        doc: "/documents/Tech Requirements.docx",
    },
    {
        name: "Project Plan",
        image: Tree,
        doc: "/documents/Project Plan.docx",
    },
    {
        name: "Requirements Analysis",
        image: Tree,
        doc: "/documents/Requirements Analysis and Design.docx",
    },
    {
        name: "Wireframes",
        image: Tree,
        doc: "/documents/Capstone II - Wireframe.pdf",
    },
    {
        name: "Status Report",
        image: Tree,
        doc: "/documents/Project Report.docx",
    },
    {
        name: "System Implementation",
        image: Tree,
    },
];

const Home = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, -300]);
    const x = useTransform(scrollY, [0, 1], ["0%", "-50%"]);

    return (
        <div className="home-page">
            <div className="scroll-components">
                <ScrollProgress />
                <ScrollToTop />
            </div>
            <div className="home-container-first telma-font" id="Home">
                {/* <h1 className="home-name">Diego Tsukayama</h1> */}
                <motion.h1
                    className="home-name no-select"
                    initial={{ y: 250, opacity: 0 }} // Start from 100px below with 0 opacity
                    whileInView={{ y: 0, opacity: 1 }} // Move to original position with full opacity
                    transition={{ duration: 0.75, ease: "easeOut" }}
                    // style={{ y }}
                >
                    Diego Tsukayama
                </motion.h1>
                <motion.h2
                    className="home-paragraph"
                    initial={{ y: 100, opacity: 0 }} // Start from 100px below with 0 opacity
                    whileInView={{ y: 0.5, opacity: 1 }} // Move to original position with full opacity
                    transition={{ duration: 0.75, ease: "easeOut" }}
                >
                    <p className="home-paragraph-content no-select satoshi-font">
                        As my dad once said, "I always search for freedom..." -
                        a phrase that I've chosen to live by, one that permeates
                        every aspect of my life and work. I found that being
                        involved in the technology industry as a programmer is a
                        path that can take me to the place that I want to go.
                    </p>
                </motion.h2>
            </div>
            <HorizontalScroll />
            <motion.div
                className="home-container-second telma-font"
                id="Projects"
            >
                <h1 className="second-title no-select">My Projects</h1>
                {/* <p className='fan-card'>Fan Card?</p> */}
                <motion.div
                    className="projects"
                    initial={{ y: 75, opacity: 0 }} // Start from 100px below with 0 opacity
                    whileInView={{ y: 0, opacity: 1 }} // Move to original position with full opacity
                    transition={{ duration: 0.75, ease: "easeOut" }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            // whileInView={{ opacity: 1}}
                            whileHover={{ scale: 1.1 }}
                            // transition={{ duration: 0.5, type: 'tween'}}
                            whileTap={{ scale: 0.95 }}
                            whileDrag={{ scale: 0.9 }}
                            animate={{ x: 0, y: 0, rotate: 0 }}
                            dragConstraints={{
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                            }}
                            dragElastic={0.9}
                            drag
                            key={project.name + index}
                            className="project-item"
                        >
                            <h2 className="satoshi-font">{project.name}</h2>
                            <img src={project.image} alt={project.name} />
                            <motion.a
                                href={project.url}
                                target="_blank" // Opens link in a new tab
                                rel="noopener noreferrer" // Security best practice
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                animate={{ x: 0, y: 0, rotate: 0 }}
                                dragConstraints={{
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                }}
                                dragElastic={0.9}
                                drag
                                className="projects-btn satoshi-font"
                            >
                                View Doc
                            </motion.a>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <motion.div className="capstone telma-font" id="Capstone">
                <h1 className="capstone-title no-select">Capstone Project</h1>
                <motion.div
                    className="capstone-docs"
                    initial={{ y: 75, opacity: 0 }} // Start from 100px below with 0 opacity
                    whileInView={{ y: 0, opacity: 1 }} // Move to original position with full opacity
                    transition={{ duration: 0.75, ease: "easeOut" }}
                >
                    {capstoneDocs.map((project, index) => (
                        <motion.div
                            // whileInView={{ opacity: 1}}
                            whileHover={{ scale: 1.1 }}
                            // transition={{ duration: 0.5, type: 'tween'}}
                            whileTap={{ scale: 0.95 }}
                            whileDrag={{ scale: 0.9 }}
                            animate={{ x: 0, y: 0, rotate: 0 }}
                            dragConstraints={{
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                            }}
                            dragElastic={0.9}
                            drag
                            key={project.name + index}
                            className="capstone-item"
                        >
                            <h2 className="satoshi-font">{project.name}</h2>
                            <img src={project.image} alt={project.name} />
                            <motion.a
                                href={project.doc}
                                download={project.doc}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                animate={{ x: 0, y: 0, rotate: 0 }}
                                dragConstraints={{
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                }}
                                dragElastic={0.9}
                                drag
                                className="capstone-btn satoshi-font"
                            >
                                Download
                            </motion.a>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <motion.div className="education" id="Education">
                <h1 className="education-title telma-font">Education</h1>
                <motion.div
                    initial={{ y: 75, opacity: 0 }} // Start from 100px below with 0 opacity
                    whileInView={{ y: 0, opacity: 1 }} // Move to original position with full opacity
                    transition={{ duration: 0.75, ease: "easeOut" }}
                >
                    <div className="education-container satoshi-font">
                        {/* <div className='qualification__button qualification-active button--flex'>
                            <i className='uil uil-graduation-cap qualification-icon'></i>
                            Education
                        </div>

                        <div className='qualification__button button--flex'>
                            <i className='uil uil-briefcase-alt qualification-icon'></i>
                            Experience
                        </div> */}

                        <div className="education-sections">
                            <div className="education-content">
                                <div className="education-data">
                                    <motion.div
                                        className="education-card no-select"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <h3>Product Management</h3>
                                        <p className="education-subtitle no-margin">
                                            BrainStation
                                        </p>
                                        <p className="education-paragraph no-margin">
                                            Certificate
                                        </p>
                                        <p className="education-paragraph no-margin">
                                            Toronto, ON
                                        </p>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i>
                                            2025 - Present
                                        </div>
                                    </motion.div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                </div>

                                <div className="education-data">
                                    <div></div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>

                                    <motion.div
                                        className="education-card no-select"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <h3>Computer Programming & Analysis</h3>
                                        <p className="education-subtitle no-margin">
                                            George Brown College
                                        </p>
                                        <p className="education-paragraph no-margin">
                                            Advanced Diploma
                                        </p>
                                        <p className="education-paragraph no-margin">
                                            Toronto, ON
                                        </p>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i>
                                            2023 - Present
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="education-data">
                                    <motion.div
                                        className="education-card no-select"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <h3>Negotiation Mastery</h3>
                                        <p className="education-subtitle no-margin">
                                            Harvard Business School
                                        </p>
                                        <p className="education-paragraph no-margin">
                                            Certificate
                                        </p>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i>
                                            2024 - 2024
                                        </div>
                                    </motion.div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                </div>

                                <div className="education-data">
                                    <div></div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>

                                    <motion.div
                                        className="education-card no-select"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <h3>Chemistry</h3>
                                        <p className="education-subtitle no-margin">
                                            York University
                                        </p>
                                        <p className="education-paragraph no-margin">
                                            Bachelor's Degree
                                        </p>
                                        <p className="education-paragraph no-margin">
                                            Toronto, ON
                                        </p>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i>
                                            2021 - 2022
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                            {/* <div className='qualification__content'>
                                <div className='qualification__data'>
                                    <div>
                                        <h3 className='qualification__title'>First</h3>
                                        <span className='qualification__subtitle'>testing - testing</span>
                                        <div className='qualification__calendar'>
                                            <i className='uil uil-calendar-alt'></i>
                                            2021 - present
                                        </div>
                                    </div>

                                    <div>
                                        <span className='qualification__rounder'></span>
                                        <span className='qualification__line'></span>
                                    </div>
                                </div>

                                <div className='qualification__data'>
                                    <div></div>

                                    <div>
                                        <span className='qualification__rounder'></span>
                                        <span className='qualification__line'></span>
                                    </div>

                                    <div>
                                        <h3 className='qualification__title'>Second</h3>
                                        <span className='qualification__subtitle'>testing - testing</span>
                                        <div className='qualification__calendar'>
                                            <i className='uil uil-calendar-alt'></i>
                                            2021 - present
                                        </div>
                                    </div>
                                </div>

                                <div className='qualification__data'>
                                    <div>
                                        <h3 className='qualification__title'>Third</h3>
                                        <span className='qualification__subtitle'>testing - testing</span>
                                        <div className='qualification__calendar'>
                                            <i className='uil uil-calendar-alt'></i>
                                            2021 - present
                                        </div>
                                    </div>

                                    <div>
                                        <span className='qualification__rounder'></span>
                                        <span className='qualification__line'></span>
                                    </div>
                                </div>

                                <div className='qualification__data'>
                                    <div></div>

                                    <div>
                                        <span className='qualification__rounder'></span>
                                        <span className='qualification__line'></span>
                                    </div>

                                    <div>
                                        <h3 className='qualification__title'>Fourth</h3>
                                        <span className='qualification__subtitle'>testing - testing</span>
                                        <div className='qualification__calendar'>
                                            <i className='uil uil-calendar-alt'></i>
                                            2021 - present
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div className="home-container-about telma-font" id="About">
                <h1 className="about-title no-select">About Me</h1>
                <p className="no-select satoshi-font">If you're interested</p>
                <motion.div
                    className="about-container"
                    initial={{ y: 75, opacity: 0 }} // Start from 100px below with 0 opacity
                    whileInView={{ y: 0, opacity: 1 }} // Move to original position with full opacity
                    transition={{ duration: 0.75, ease: "easeOut" }}
                >
                    <img src={Portrait} className="about-image" />
                    <div className="about-info-container">
                        <div className="about-info">
                            <div className="about-cards-container">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    whileDrag={{ scale: 0.9 }}
                                    animate={{ x: 0, y: 0, rotate: 0 }}
                                    dragConstraints={{
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                    }}
                                    dragElastic={0.9}
                                    drag
                                    className="about-cards telma-font"
                                >
                                    <h5>(Logo)</h5>
                                    <h3>Japanese</h3>
                                    <p className="satoshi-font">
                                        Born in Bolivia
                                    </p>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    whileDrag={{ scale: 0.9 }}
                                    animate={{ x: 0, y: 0, rotate: 0 }}
                                    dragConstraints={{
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                    }}
                                    dragElastic={0.9}
                                    drag
                                    className="about-cards telma-font"
                                >
                                    <h5>(Logo)</h5>
                                    <h3>Languages</h3>
                                    <p className="satoshi-font">
                                        Spanish, English
                                    </p>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    whileDrag={{ scale: 0.9 }}
                                    animate={{ x: 0, y: 0, rotate: 0 }}
                                    dragConstraints={{
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                    }}
                                    dragElastic={0.9}
                                    drag
                                    className="about-cards telma-font"
                                >
                                    <h5>(Logo)</h5>
                                    <h3>Played Piano</h3>
                                    <p className="satoshi-font">~ 7 years</p>
                                </motion.div>
                            </div>
                            <h3 className="about-description no-select satoshi-font">
                                I came to canada in January 2020, and studied
                                chemistry for 2 years at York University before
                                switching to programming at George Brown
                                College. I would like to position myself in the
                                intersection between business and technology,
                                and I am currently interested in product
                                management (I am taking a product management
                                training course at BrainStation).
                            </h3>
                            <div className="about-documents">
                                <motion.a
                                    href="/documents/Resume.pdf"
                                    download="Diego_Tsukayama_Resume.pdf"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    whileDrag={{ scale: 0.9 }}
                                    animate={{ x: 0, y: 0, rotate: 0 }}
                                    dragConstraints={{
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                    }}
                                    dragElastic={0.9}
                                    drag
                                    className="about-resume satoshi-font"
                                >
                                    Download Resume
                                </motion.a>
                                <motion.a
                                    href="/documents/KonradCoverLetter.pdf"
                                    download="Diego_Tsukayama_CV.pdf"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    whileDrag={{ scale: 0.9 }}
                                    animate={{ x: 0, y: 0, rotate: 0 }}
                                    dragConstraints={{
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                    }}
                                    dragElastic={0.9}
                                    drag
                                    className="about-cv satoshi-font"
                                >
                                    Download CV
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Home;
