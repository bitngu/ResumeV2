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
                
        <form name="contact" method="post" onSubmit = 'submit'>
        <input type="hidden" name="form-name" value="contact" />
        <p>
            <label htmlFor="name">Name</label> <br />
            <input type="text" id="name" name="name" required />
        </p>
        <p>
            <label htmlFor="email">Email</label> <br />
            <input type="email" id="email" name="email" required />
        </p>
        <p>
            <label htmlFor="message">Message</label> <br />
            <textarea id="message" name="message" required></textarea>
        </p>
        <p>
            <button type="submit" value="Submit message" />
        </p>
        </form>
                {/* <form id ='contact-form' method ="POST"  data-netlify = 'true'  action ='' data-netlify-recaptcha="true" 
                netlify netlify-honeypot="bot-field" hidden>
                    <div className="field"> 
                        <h3>Name</h3>
                        <input type="text" name ='name' placeholder = 'Your name...' />
                    </div>
                    <div className="field"> 
                        <h3>Email</h3>
                        <input type="email" name ='email' placeholder = 'Your Email...' />
                    </div>
                    <div className="field"> 
                        <h3>Message</h3>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder ='Your message...' value></textarea>
                    </div>
                    <div data-netlify-recaptcha = 'true'></div>
                    <div onClick = {handleSubmit}className = "submit-button">
                        <input type="submit" value ='Send Message'/>
                    </div>
                </form> */}

            </div>
        </section>
    );
}
 
export default Contact;