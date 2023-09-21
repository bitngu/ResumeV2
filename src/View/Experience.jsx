import './Experience.css'
import briefcase from '../graphics/briefcase.png'

const Experience = () => {
    return ( 
        <section id = "experience">
            <div className ='title-experience'>
                <p>Work <b>Experience </b></p>
                <div className="divider">
                    <div className="hr-divider"></div>
                    <span> * </span>
                    <div className="hr-divider"></div>
                </div>
            </div>
                    {/* Work History Component*/}
            <div className="work-history">
                <div className="vertical-bar" />
                <div id= 'work-experiences'>
                    {/**/}
                    <div className= "experience" id = 'qualcomm'>
                        <div className= 'briefcase'>
                            <img src={briefcase} alt= 'briefcase-icon' />
                        </div>
                        <div className= 'job-desc'>
                            <h3> System Test Engineer </h3>
                            <p>  September 2022 - May 2022 </p>
                            <div className='job-desc-divider'></div>
                            <h3> Qualcomm </h3>
                            <p> Worked in the Core Platform Department, specifically for the Boot and Kernel team developing test plans for mobile system boot up, streamlining python automations to reduce manual effort and worked with stakeholders to triage issues to support chipset validation through all stages of SDLC.  </p>
                        </div>
                    </div>
                    {/**/}
                    <div className= "experience" id = 'Ascent OS'>
                        <div className= 'briefcase'>
                            <img src={briefcase} alt= 'briefcase-icon' />
                        </div>
                        <div className= 'job-desc'>
                            <h3> Software Engineer Intern </h3>
                            <p> June 2022 - September 2022 </p>
                            <div className='job-desc-divider'></div>
                            <h3> Ascent OS </h3>
                            <p> Worked on the frontend component at a SaaS startup, optimizing website layouts and responsiveness, developing a Python script for web scraping and ETL on solar market data, and resolving critical user experience issues </p>
                        </div>
                    </div>
                    {/**/}
                    <div className= "experience" id = 'UCD CADMS'>
                        <div className= 'briefcase'>
                            <img src={briefcase} alt= 'briefcase-icon' />
                        </div>
                        <div className= 'job-desc'>
                            <h3> Student Programmer </h3>
                            <p> August 2021 - June 2022 </p>
                            <div className='job-desc-divider'></div>
                            <h3> UC Davis CADMS </h3>
                            <p> Designed, developed, and maintained a React-based website for UCDSVM, offering resources to farmers on topics such as safety, biosecurity, and seminars. Automated weekly data collection and processing for animal health metrics using Python scripts</p>
                        </div>
                    </div>

                    <div className= "experience" id = 'UCD Datalab'>
                        <div className= 'briefcase'>
                            <img src={briefcase} alt= 'briefcase-icon' />
                        </div>
                        <div className= 'job-desc'>
                            <h3> Data Science Intern </h3>
                            <p> March 2021 - June 2022 </p>
                            <div className='job-desc-divider'></div>
                            <h3> UC Davis Datalab </h3>
                            <p> Developed R scripts for PDF table detection and data parsing through Optical Character Recognition. Improved code readability and modularity by refactoring Python and R scripts.  </p>
                        </div>
                    </div>

                </div>
            </div>

            {/*<div className="education-content">*/}
            {/*    /!* info-container to have column-count: 2 *!/*/}
            {/*    <div className="vertical-bar">  </div>*/}
            {/*        <div className="school-exp">*/}
            {/*            <div className="school">*/}
            {/*                    <h4> <span className='circle-dot' id = 'dot1'></span> 2016 - Present</h4>*/}
            {/*                    <h3>University of California, Davis</h3>*/}
            {/*                    <p> Major in Statistics and Managerial Economics</p>*/}
            {/*                     <span> Minor in Computer Science  </span>*/}
            {/*            </div>*/}
            {/*            <div className="experience">*/}
            {/*                <h4><span className='circle-dot' id = 'dot2'></span>March 2021 - June 2021</h4>*/}
            {/*                <h3> Data Science Intern - UC Davis DataLab</h3>*/}
            {/*                <p> Wrote an R script to test the accuracy of the Solr search engine using*/}
            {/*                    research documents from government databases </p>*/}
            {/*                <span> Documented, tested and debugged Java code for production </span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </section>
        
    );
}
 
export default Experience;