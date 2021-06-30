import logo from '../graphics/logo.png'
import tractivity from '../graphics/tractivity.png'
import shopping from '../graphics/shoptillyoudrop.jpg'
import proportion_plot from '../graphics/proportion_plot_lol.png'


import cache from '../graphics/cache.jpg'
import web from '../graphics/web-logo.png'
 

import './Project.css'

const Projects = () => {

    return (  
        <section id = 'project'>
            <div className="title-projects">
                <h1> My <span>Projects </span> </h1>
                <div className="logo">
                    <img src={logo} alt= "" />
                </div>
            </div>
            <div className="project-content">
                <div className="project" id= 'tractivity'> 
                    <div className="img-container">
                        <img src={tractivity} alt= "tracitivty-webpage" />
                        <div className="projects-overlay">
                            <div  className='project-link'>
                                <img onClick = {()=> window.open('https://tractivity-bitngu.ecs162instruct.repl.co/')} className ='web-icon'src={web} alt= "tractivity-website" />
                            </div>
                            <div className="project-caption">
                                <h5>Tractivity</h5>
                                <p>Fitness Application</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="project" id= 'shoptillyoudrop'> 
                    <div className="img-container">
                        <img src={shopping} alt= "shoptillyoudrop-preview" />
                        <div className="projects-overlay">
                            <div  className='project-link'>
                                <img onClick = {()=> window.open('https://final-project-starter-bitngu.ecs162instruct.repl.co/')} className ='web-icon'src={web} alt= "tractivity-website" />
                            </div>
                            <div className="project-caption">
                                <h5>Shop Till You Drop</h5>
                                <p> College Tuition Calculator in California </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="break"></div>
                <div className="project" id= 'cache'> 
                    <div className="img-container">
                        <img src={cache} alt= "cache-img" />
                        <div className="projects-overlay">
                            <div className="project-caption">
                                <h5>Cache</h5>
                                <p> LRU Implemention </p>
                            </div>
                            <div onClick = {()=> window.open('https://github.com/bitngu/Cache')}  className="github-link">
                                <h3 >Github</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project" id= 'lol'> 
                    <div className="img-container">
                        <img src={proportion_plot} alt= "cache-img" />
                        <div className="projects-overlay">
                            <div className="project-caption">
                                <h5> Toxicity in the gaming community</h5>
                                <p> League of Legends </p>
                            </div>
                            <div onClick = {()=> window.open('https://github.com/bitngu/Toxicity-in-a-gaming-comunnity')}  className="github-link">
                                <h3>Github</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Projects;