import React from 'react'
import profile from '../graphics/profile.jpeg'

import './About.css'
const About = () => {
    return (  
        <section id = "about">
            <div className= "title-about">
                <h1>About <span> Me</span></h1>
                <div className="divider">
                    <div className="hr-divider"></div>
                    <span> * </span>
                    <div className="hr-divider"></div>
                </div>
            </div>

            <div className="profile">
                <div className="profile-pic"> 
                    <img src= {profile} alt= "profile-pic" />
                </div>
                <div className="info">
                    <div className="greetings">
                        <h1>Hello!</h1> 
                        <h1>I'm <span>Bi Nguyen.</span></h1>
                    </div>

                    <p>I am an aspiring Software Engineer. I took an interest in Computer Science while studying Statistics at UC Davis.
                    I remember when I first took my Intro to Programming course, I thought it was the hardest thing. 
                    The logic, the syntax, the structure... everything was too overwhelming. So I failed. I thought about
                    not retaking the class because it was a nightmare. But eventually, I gave it another try and worked harder,
                    practiced more. It wasn't until the final project for the class where I developed my passion for Computer Science.
                    The project was to implement a text-based version of the game Battleship.      
                    I worked hours on end implementing, debugging, and attending office hours.
                    When I finally completed the project, I felt incredible joy and happiness. 
                    I knew that this was something that I want to do in the future - implementing, designing, and testing 
                    "large" scale project(s). Since then, I have been trying to improve my skills and knowledge
                    in Computer Science by taking upper-division CS courses offered at 
                    UC Davis and online classes offered at Udemy.</p>
                </div>
            </div>

      

        </section>
    );
}
export default About;