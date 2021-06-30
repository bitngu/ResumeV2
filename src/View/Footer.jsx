import './Footer.css';
import github from '../graphics/github-logo.png';
import linkedin from '../graphics/linkedin-logo.png';
import gmail from '../graphics/gmail-logo.png';


const Footer = () => {
    return (  
        <footer>
            <div className = 'footer-content'>
            <div className="socialnetwork" id = 'network-footer'> 
                    <div id = 'rotate-logo1' className="github">
                        <img src={github} alt= "github-logo" />
                    </div>
                    <div id = 'rotate-logo2' className="linkedin">
                        <img src={linkedin} alt= "linkedIn-logo" />
                    </div>
                    <div id = 'rotate-logo3' className="gmail">
                        <img src={gmail} alt= "gmail-logo" />
                    </div>
                </div>
                <h3> &copy; 2021 Bi Nguyen. All Rights Reserved</h3>
                
            </div>
        </footer>
    );
}
 
export default Footer;
