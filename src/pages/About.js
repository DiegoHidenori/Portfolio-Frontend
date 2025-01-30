import React from 'react';
import '../components/About.css';
import ParticlesComponent from '../components/Particles';

const About = () => {
    return (
        <div className='about'>
            {/* <p className='bio satoshi-font'>
                I am 23 years old, I am of Japanese descent and I was born in Bolivia, South America. I
                stayed there for about 14 years (until 2015)
                studying at Cambridge College International
                School. At school, I enjoyed algebra and I liked
                competing with other students in my class. I
                also liked learning chemistry and participating
                in the lab sessions.
            </p>
            <p className='bio satoshi-font'>
                In the middle of 2015, I moved to Texas for
                high school, where I stayed for all four years. I
                enrolled in courses in engineering and robotics,
                using applications like AutoCAD.
            </p>
            <p className='bio satoshi-font'>
                After finishing high school in Texas, I moved
                to Toronto with my brother for college in 2020
                and I've been there ever since.
            </p>
            <p className='bio satoshi-font'>
                I am currently studying Computer Programming 
                & Analysis at George Brown
                College, and I am in my 6th and last semester.
            </p> */}
            <div className='background-animated'>
                <ParticlesComponent id='particles' />
            </div>
        </div>
    )
}

export default About;