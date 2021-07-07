import jsLogo from '../graphics/js-logo.png' 
import htmlLogo from '../graphics/html5-logo.png' 
import cssLogo from '../graphics/css3-logo.png' 
import nodeLogo from '../graphics/node-logo.png'
import reactLogo from '../graphics/react-logo.png'
import pythonLogo from '../graphics/python-logo.png'
import seleniumLogo from '../graphics/selenium-logo.png'
import cppLogo from '../graphics/cpp-logo.png'
import cLogo from '../graphics/clogo.png'
import javaLogo from '../graphics/javaLogo.png'
import gitLogo from '../graphics/gitLogo.png'
import rLogo from '../graphics/rLogo.png'


import './Education.css'

const Education = () => {
    return ( 
        <section id = "education">
            <div className ='title-education'> 
                <h1> Education &amp; Experience </h1>
                <div className="divider">
                    <div className="hr-divider"></div>
                    <span> * </span>
                    <div className="hr-divider"></div>
                </div>
                
            </div>
            <div className="education-content">
                {/* info-container to have column-count: 2 */}
                <div className="vertical-bar">  </div>
                    <div className="school-exp"> 
                        <div className="school">
                                <h4> <span className='circle-dot' id = 'dot1'></span> 2016 - Present</h4>
                                <h3>University of California, Davis</h3>
                                <p> Major in Statistics and Managerial Economics</p>
                                 <span> Minor in Computer Science  </span>
                        </div>
                        <div className="experience">
                            <h4><span className='circle-dot' id = 'dot2'></span>March 2021 - June 2021</h4>
                            <h3> Data Analyst Intern </h3>
                            <p> Wrote an R script to test the accuracy of the Solr search engine using 
                                research documents from government databases </p>
                            <span> Documented, tested and debugged Java code for production </span>
                    </div>
                </div>
            </div>
            <section id = 'skills'>
                <h1>Skills</h1>
                <div>
                    <ul className="list-of-skills">
                        {/* 1 */}
                        <li> 
                            <img src={cLogo} alt="" />
                            <span>C</span>
                        </li>
                        {/* 2 */}
                        <li>
                            <img src={rLogo} alt="" />
                            <span> R </span>
                        </li>
                        {/* 3 */}
                        <li>
                            <img src={htmlLogo} alt="" />
                            <span> HTML </span>
                        </li>
                        {/* 4 */}           
                        <li>
                            <img src={reactLogo} alt="" />
                            <span> React </span>
                        </li>
                        {/* 1 */}
                        <li>
                            <img src={cppLogo} alt="" />
                            <span>C++</span>
                        </li>
                        {/* 2 */}
                        <li>
                            <img src={pythonLogo} alt="" />
                            <span>Python</span>
                        </li>
                        {/* 3 */}
                        <li>
                            <img src={cssLogo} alt="" />
                            <span> CSS </span>
                        </li>
                        {/* 4 */}
                        <li>
                            <img src={nodeLogo} alt="" />
                            <span> Node </span>
                        </li>
                        {/* 1 */}
                        <li>
                            <img src={javaLogo} alt="" />
                            <span> Java </span>
                        </li>
                        {/* 2 */}
                        <li>
                            <img src={gitLogo} alt="" />
                            <span> Git </span>
                        </li>
                        {/* 3 */}
                        <li>
                            <img src={jsLogo} alt="" />
                            <span> Javascript </span>
                        </li>
                        {/* 4 */}
                        <li>
                            <img src={seleniumLogo} alt="" />
                            <span> Selenium </span>
                        </li>
                             
                    </ul>


                </div>

            </section>
        </section>
        
    );
}
 
export default Education;