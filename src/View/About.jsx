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
                    I enjoy the creativity that revolves around programming. With programming, 
                    I can develop games, websites and solve problems. 
                    The versality of coding allows you to get creative because there is no one way to solve a problem.
                    I have been trying to improve my skills and knowledge
                    in programming by taking the upper division Computer Science courses offered at 
                    UC Davis and taking online classes offered at Udemy.</p>
                </div>
            </div>

      

        </section>
    );
}
export default About;