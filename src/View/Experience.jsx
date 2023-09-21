import './Experience.css'

const Experience = () => {
    return ( 
        <section id = "experience">
            <div className ='title-education'>
                <p>Work <b>Experience </b></p>
                <div className="divider">
                    <div className="hr-divider"></div>
                    <span> * </span>
                    <div className="hr-divider"></div>
                </div>
                
            </div>
            {/*<div className="education-content">*/}
            {/*    /!* info-container to have column-count: 2 *!/*/}
            {/*    <div className="vertical-bar">  </div>*/}
            {/*        <div className="school-exp"> */}
            {/*            <div className="school">*/}
            {/*                    <h4> <span className='circle-dot' id = 'dot1'></span> 2016 - Present</h4>*/}
            {/*                    <h3>University of California, Davis</h3>*/}
            {/*                    <p> Major in Statistics and Managerial Economics</p>*/}
            {/*                     <span> Minor in Computer Science  </span>*/}
            {/*            </div>*/}
            {/*            <div className="experience">*/}
            {/*                <h4><span className='circle-dot' id = 'dot2'></span>March 2021 - June 2021</h4>*/}
            {/*                <h3> Data Science Intern - UC Davis DataLab</h3>*/}
            {/*                <p> Wrote an R script to test the accuracy of the Solr search engine using */}
            {/*                    research documents from government databases </p>*/}
            {/*                <span> Documented, tested and debugged Java code for production </span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </section>
        
    );
}
 
export default Experience;