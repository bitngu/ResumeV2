import './Footer.css';
import github from '../graphics/github-logo-black.png';
import linkedin from '../graphics/linkedin-logo-black.png';
import gmail from '../graphics/gmail-logo-black.png';


const Footer = () => {
    return (  
        <footer>
            <div className = 'footer-content'>
            <div className="socialnetwork" id = 'network-footer'> 
                    <div onClick= {() => window.open('https://github.com/bitngu') } id = 'rotate-logo1' className="github">
                        <img src={github} alt= "github-logo" />
                    </div>
                    <div onClick= {() => window.open('https://www.linkedin.com/in/bitngu/')} id = 'rotate-logo2' className="linkedin">
                        <img src={linkedin} alt= "linkedIn-logo" />
                    </div>
                    <div id = 'rotate-logo3' className="gmail">
                        <a href = "mailto: bitngu3@gmail.com">
                            <img src={gmail} alt= "gmail-logo" />
                        </a>
                    </div>
                </div>
                <h3> &copy; 2021 by Bi Nguyen. All Rights Reserved</h3>
                
            </div>
        </footer>
    );
}
 
export default Footer;
