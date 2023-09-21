import React from 'react';
import Navbar from './Navbar';
import './Home.css';
// import background from '../graphics/milkway.jpeg';
import background from '../graphics/urban-sunset.jpeg';
import downArrowWhite from '../graphics/down-arrow-white.png';
import downArrowBlack from '../graphics/down-arrow-black.png';

import github from '../graphics/github-logo.png';
import linkedin from '../graphics/linkedin-logo.png';
import gmail from '../graphics/gmail-logo.png';

const Home = () => {
    const resumeLink = "https://docs.google.com/document/d/1Rm5cPXMIhaa-VHCgBxZpefPsOcqra-lIncIZQgVti_4/edit?usp=sharing"
    const handleOnClick = () => {
        document.getElementById('about').scrollIntoView({behavior: 'smooth'});

    }
    const displayCV = () => {
        window.open(resumeLink, '_blank');
    }

    return (  
        <section id="home">
            <div className="background-img">
                <img src={background} alt="milkyway-background" />
                <div onClick = {handleOnClick} className="move-down">
                    <img src={downArrowWhite} alt= "v"  className="whiteArrow"/>
                    <img src={downArrowBlack} alt= "v"  className= "blackArrow"/>

                </div>

            </div>
            <Navbar />

            <div className="intro">
                <h2>Hi there, </h2>
                <h1> I Am A <span className="text"></span> </h1>
            </div>
            <div className= "socialnetwork">
                <div onClick= {() => window.open('https://github.com/bitngu') } className="github">
                    <img src = {github} alt="github-logo" />
                </div>
                <div onClick= {() => window.open('https://www.linkedin.com/in/bitngu/')} className="linkedin">
                    <img src = {linkedin} alt="github-logo" />
                </div>
                <div className="gmail">
                    <a href = "mailto: bitngu3@gmail.com">
                        <img src = {gmail} alt="github-logo" />
                    </a>
                </div>
            </div>
            <div onClick = {displayCV} className="resume"> View Resume </div>
            
        </section>
    );
}
 
export default Home;