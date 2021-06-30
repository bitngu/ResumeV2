import logo from '../graphics/logo.png'
import './Contact.css'
const Contact = () => {
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     let myForm = document.getElementById('contact-form');
    //     let formData = new FormData(myForm);
        
    //     fetch('/', {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //         body: formData
    //     }).then(() => console.log('Form successfully submitted')).catch((error) =>
    //         alert(error))
    // }

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
                <form id ='contact-form' method = "POST"  data-netlify = 'true' data-netlify-recaptcha="true" 
                netlify netlify-honeypot="bot-field"> 
                    <input type="hidden" name = 'form-name' value= 'contact-form'/>
                    <div className="field"> 
                        <label> Name <input type="text" name ='name' placeholder = 'Your name...' /></label>
                    </div>
                    <div className="field"> 
                        <label> Email 
                        <input type="email" name ='email' placeholder = 'Your Email...' />
                        </label>
                    </div>
                    <div className="field"> 
                        <label> Message 
                        <textarea name="message" id="message" cols="30" rows="10" placeholder ='Your message...'> </textarea>
                        </label>
                    </div>
                    <div data-netlify-recaptcha = 'true'></div>
                    <div className = "submit-button">
                        <button type="submit" value ='Send Message'/>
                    </div>
                </form>

            </div>
        </section>
    );
}
 
export default Contact;