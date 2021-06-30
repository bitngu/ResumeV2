import logo from '../graphics/logo.png'
import './Education.css'

const Education = () => {
    return ( 
        <section id = "education">
            <div className ='title-education'> 
                <h1> Education &amp; Experience </h1>
                <div className="logo" id = 'about-logo'>
                    <img src={logo} alt= "website-logo" />
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
                            <h4><span className='circle-dot' id = 'dot2'></span>March 2021 - Present</h4>
                            <h3> Data Analyst Intern </h3>
                            <p> Wrote an R script to test the accuracy of the Solr search engine using 
                                research documents from government databases </p>
                            <span> Documented, tested and debugged Java code for production </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Education;