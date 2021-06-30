import React from 'react'
import logo from '../graphics/logo.png'
import profile from '../graphics/profile.jpg'
import './About.css'
const About = () => {
    return (  
        <section id = "about">
            <div className= "title-about">
                <h1>About <span> Me</span></h1>
                <div className="logo" id = 'about-logo'>
                    <img src={logo} alt= "website-logo" />
                </div>
            </div>

            <div className="profile">
                <div className="profile-pic"> 
                    <img src= {profile} alt= "profile-pic" />
                </div>
                <div className="info">
                    <div className="greetings">
                        <h1>Hello!</h1> 
                        <h1>I'm <span>Bi Nguyen</span></h1>
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

            <section className="skills">
                <h1>Skills</h1>

            <div className="subsection">
                <ul>
                    <li>
                    <div className= "domain" >
                        <h4> C/C++ <span className = 'percent'>  80% </span></h4>
                        <div className="scale">
                            <div className = 'scale-bar' id= 'eighty'></div>
                        </div>
                    </div>
                    </li>
                    <li>
                    <div className= "domain" >
                        <h4> Python <span className = 'percent'> 55% </span></h4>
                        <div className="scale">
                            <div className = 'scale-bar' id='fifty-five' ></div>
                        </div>
                    </div>
                    </li>
                    <li>
                <div className= "domain" >
                    <h4> R <span className = 'percent'> 63% </span></h4>
                    <div className="scale">
                        <div className = 'scale-bar' id='sixty-three' ></div>
                    </div>
                </div>
                </li>
                <li>
                <div className= "domain" >
                    <h4> React/Javascript <span className = 'percent'> 75% </span></h4>
                    <div className="scale">
                        <div className = 'scale-bar' id='seventy-five' ></div>
                    </div>
                </div>
                </li>
                <li>

                <div className= "domain" >
                    <h4> Node <span className = 'percent'> 60% </span></h4>
                    <div className="scale">
                        <div className = 'scale-bar' id='sixty' ></div>
                    </div>
                </div>
                </li>
                <li>

                <div className= "domain" >
                    <h4> HTML/CSS <span className = 'percent'> 70% </span></h4>
                    <div className="scale">
                        <div className = 'scale-bar' id='seventy' ></div>
                    </div>
                </div>
                </li>

                </ul>

                </div>
                
            </section>

        </section>
    );
}
export default About;