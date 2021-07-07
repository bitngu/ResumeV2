import tractivity from '../graphics/tractivity.png'
import jsLogo from '../graphics/js-logo.png' 
import htmlLogo from '../graphics/html5-logo.png' 
import cssLogo from '../graphics/css3-logo.png' 
import nodeLogo from '../graphics/node-logo.png'
import reactLogo from '../graphics/react-logo.png'
import pythonLogo from '../graphics/python-logo.png'
import seleniumLogo from '../graphics/selenium-logo.png'
import avltree from '../graphics/avltree.png'
import graphs from '../graphics/graphs.png'
import cppLogo from '../graphics/cpp-logo.png'
import cLogo from '../graphics/clogo.png'
import shopping from '../graphics/shoptillyoudrop.jpg'
import proportion_plot from '../graphics/proportion_plot_lol.png'
import battleship from '../graphics/battleship.jpg'
import minesweeper from '../graphics/minesweeper.jpg'
import cache from '../graphics/cache.jpg'
 

import './Project.css'

const Projects = () => {
    // turn project section into components when have time

    return (  
        <section id = 'project'>
            <div className="title-projects">
                <h1> Past <span> Projects </span> </h1>
                <div className="divider">
                    <div className="hr-divider"></div>
                    <span> * </span>
                    <div className="hr-divider"></div>
                </div>
            </div>
            <div className="project-row">
                <div className="project-content"> 
                    <div className="project-img-container">
                        <img src={tractivity} alt= "tracitivty-webpage" />
                    </div>
                    <div className="project-description">
                        <h3>Tractivity</h3>
                        <div className="create-with">
                            <div className= "logos-container">
                                <h4>Created using: </h4>
                                <img src= {jsLogo} alt="JS Logo" />
                                <img src={htmlLogo} alt="HTML5 Logo" />
                                <img src={cssLogo} alt="CSS3 Logo" />
                                <img className = 'adjust' src={nodeLogo} alt="Node.js Logo" />
                            </div>
                            <p>Tractivity is a fitness web application that uses Google's authentication (OAuth v2.0) and SQLite to store and 
                                keep track of users' daily activity such as walking, swimming, biking, etc. 
                                Users can keep track of past activities or add future activity to
                                the app. The app will add a reminder to the user when the date is near and will also display
                                a bar chart for any of their previous activties. View the live demo and try it out yourself! </p>
                        </div>
                        <div className="project-links">
                            <div onClick = {()=> window.open('https://tractivity-bitngu.ecs162instruct.repl.co/')} className="website-link">
                                Live Demo
                            </div>
                            <div onClick = {()=> window.open('https://github.com/bitngu/Tractivity')} className="github-link">
                                Github
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-row">
                <div className="project-content" > 
                    <div className="project-img-container">
                        <img src={shopping} alt= "tracitivty-webpage" />
                    </div>
                    <div className="project-description">
                        <h3>Shop-till-you-drop</h3>
                        <div className="create-with">
                            <div className= "logos-container">
                                <h4>Created using: </h4>
                                <img src= {reactLogo} alt="React Logo" />
                                <img src={cssLogo} alt="CSS3 Logo" />
                                <img className = 'adjust' src={nodeLogo} alt="Node.js Logo" />
                            </div>
                            <p>Shop-till-you-drop is a web application that uses the College Scoreboard API to retrieve information about financial aid qualification for
                                students based on their family income for all California Colleges. View the live demo to see if you qualify for financial aid for your school! 
                            </p>
                        </div>
                        <div className="project-links">
                            <div onClick = {()=> window.open('https://final-project-starter-bitngu.ecs162instruct.repl.co/')} className="website-link">
                                Live Demo
                            </div>
                            <div onClick = {()=> window.open('https://github.com/bitngu/shop-till-you-drop')} className="github-link">
                                Github
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-row">
                <div className="project-content" > 
                    <div className="project-img-container">
                        <img src={avltree} alt = ""/>
                    </div>
                    <div className="project-description">
                        <h3>AVL Tree </h3>
                        <div className="create-with">
                            <div className= "logos-container">
                                <h4>Created using: </h4>
                                <img src= {cppLogo} alt="Cpp Logo" />
                            </div>
                            <p>Implemented the self-balancing binary tree data structure in C++ using Object-Oriented Programming and Data Structure Design principles.
                                This implementation takes advantage of smart pointers to create the rotation neccesary to the balance the tree. 
                                Generic methods for most data structures are included: add, remove

                            </p>
                        </div>
                        <div className="project-links">
                            <div onClick = {()=> window.open('https://github.com/bitngu/Data-Structures-Algorithm/tree/main/C%2B%2B/AVL%20Tree')} className="github-link">
                                Github
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-row">
                <div className="project-content" > 
                    <div className="project-img-container">
                        <img src={graphs} alt= "" />
                    </div>
                    <div className="project-description">
                        <h3> BFS &amp; DFS </h3>
                        <div className="create-with">
                            <div className= "logos-container">
                                <h4>Created using: </h4>
                                <img src= {cppLogo} alt="Cpp Logo" />
                            </div>
                            <p>Created the Breadth First Search and Depth First Search algorithm in C++ using the Stack and Queue Data Structure as well as implementing 
                                the Adjacency Matrix and Adjacency List to get the Transitive Closure in the graph. 
                            </p>
                        </div>
                        <div className="project-links">
                            <div onClick = {()=> window.open('https://github.com/bitngu/Data-Structures-Algorithm/tree/main/C%2B%2B/Graphs')} className="github-link">
                                Github
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="project-row">
                <div className="project-content"> 
                    <div className="project-img-container">
                        <img src={cache} alt = ""/>
                    </div>
                    <div className="project-description">
                        <h3>Cache</h3>
                        <div className="create-with">
                            <div className= "logos-container">
                                <h4>Created using: </h4>
                                <img src= {pythonLogo} alt="Python Logo" />
                                <span> Logisim-Evolution </span>
                            </div>
                            <p>Implemented the Cache using the Least Recently Used method simulated in Logisim Evolution. </p>
                        </div>
                        <div className="project-links">
                            <div onClick = {()=> window.open('https://github.com/bitngu/Cache')} className="github-link">
                                Github
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="project-row">
                <div className="project-content"> 
                    <div className="project-img-container">
                        <img src={proportion_plot} alt = ""/>
                    </div>
                    <div className="project-description">
                        <h3>Toxicity in a Gaming Community</h3>
                        <div className="create-with">
                            <div className= "logos-container">
                                <h4>Created using: </h4>
                                <img src= {pythonLogo} alt="Python Logo" />
                                <img src={seleniumLogo} alt="CSS3 Logo" />
                            </div>
                            <p> Analyzed the behavior of gamers in different chat forum of the popular game, League of Legends using
                                Natural Language Processing and Statistical Analysis. Additionally, I webscrapped multiple pages using XPath and Selenium to collect data
                                from 4 different regions and performed Exploratory Data Analysis. 
                            </p>
                        </div>
                        <div className="project-links">
                            <div onClick = {()=> window.open('https://github.com/bitngu/Toxicity-in-a-gaming-comunnity')} className="github-link">
                                Github
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-row">
                <div className="project-content" > 
                    <div className="project-img-container">
                        <img src={minesweeper} alt= "" />
                    </div>
                    <div className="project-description">
                        <h3> Minesweeper </h3>
                        <div className="create-with">
                            <div className= "logos-container">
                                <h4>Created using: </h4>
                                <img src= {cLogo} alt="C Logo" />
                            </div>
                            <p>Created a text-based version of the game Minesweeper in C using Object-Oriented Programming. 
                                The goal of the game is to clear the board without denotating any "mines" with clues from surrounding mines in each field.
                                </p>
                        </div>
                        <div className="project-links">
                            <div onClick = {()=> window.open('https://github.com/bitngu/Games/tree/main/minesweeper')} className="github-link">
                                Github
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-row">
                <div className="project-content" > 
                    <div className="project-img-container">
                        <img src={battleship} alt= "" />
                    </div>
                    <div className="project-description">
                        <h3> Battleship </h3>
                        <div className="create-with">
                            <div className= "logos-container">
                                <h4>Created using: </h4>
                                <img src= {pythonLogo} alt="Python Logo" />
                            </div>
                            <p> Implemented the popular board game, Battleship in Python where user can battle against different types of "AI". There are
                                3 types of AI: Random, Smart, and Cheater. The Random AI will place its ship and fire randomly in the board 
                                while if the Smart AI ever hits a ship, it will always try to hit the surrounding ship. As for the Cheater AI, 
                                the user will never win because it can "look through" the user's board. My first ever project! Give it a try, you must
                                have version 3 python to run it. 
                            </p>
                        </div>
                        <div className="project-links">
                            <div onClick = {()=> window.open('https://github.com/bitngu/Games/tree/main/battleship')} className="github-link">
                                Github
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </section>
    );
}
export default Projects;