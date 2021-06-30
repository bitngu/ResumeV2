import logo from '../graphics/logo.png'
import './Contact.css'
const Contact = () => {
  
    return (  
        <section id ="contact">
            <div className="title-contact">
                <h1> Get in <span>Contact</span></h1>
                <div className="logo" id = 'about-logo'>
                    <img src={logo} alt= "website-logo" />
                </div>
            </div>
            <div className="contact-content">
                <p>If you are interested in collaboration or would like to hire me - please contact me by e-mail
                    <span id = 'contact-email'> bitngu3@gmail.com </span> or use the form below.
                </p>
                <form id ='contact-form' method ="POST"  data-netlify = 'true' data-netlify-recaptcha="true" 
                netlify netlify-honeypot="bot-field" hidden>
                    <input type="hidden" name = 'form-name' value = 'contact-form'/>
                    <div className="field"> 
                         <h3>Name</h3> 
                         <input type="text" name ='name' placeholder = 'ENTER YOUR NAME*' />
                    </div>
                    <div className="field"> 
                        <h3>Email</h3>  
                        <input type="email" name ='email' placeholder = 'ENTER YOUR EMAIL*' />
                    </div>
                    <div className = 'field'> 
                        <h3>Phone</h3>
                        <input type="number" name ='phoneNumber' placeholder = 'PHONE NUMBER' />

                    </div>
                    <div className="field"> 
                        <h3>Message</h3> 
                        <textarea name="message" id="message" cols="30" rows="10" placeholder ='YOUR MESSAGE*'> </textarea>
                    </div>
                    <div data-netlify-recaptcha = 'true'></div>
                    <div className = "submit-button">
                        <input type="submit" value ='Send Message'/>
                    </div>
                </form>

            </div>
        </section>
    );
}
  
export default Contact;