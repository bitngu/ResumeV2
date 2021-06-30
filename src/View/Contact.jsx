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
            <form
            name = 'contact-form'
            method ='POST'
            data-netlify = 'true'>
                <input type="hidden" name="form-name" value = "contact-form" />
                <div className="userInfo">
                    <h3>Name</h3>
                    <input type ='text' name = 'name' placeholder = 'Your name...' required></input>
                </div>
                <div className="userInfo">
                    <h3>Email</h3>
                    <input type ='email' name = 'email' placeholder = 'Your email...' required></input>
                </div>
                <div className="userInfo">
                    <h3>Phone Number</h3>
                    <input type="number" name ='phone' placeholder = 'Your phone number...'/>
                </div>
                <div className="userInfo">
                    <h3>Message</h3>
                    <textarea name="message" placeholder = 'Your message...' cols="30" rows="10" required></textarea>
                </div>
                <div className="submit-container">
                    <button type = 'submit'> Send Message </button>
                </div>
            </form>   

            </div>
        </section>
    );
}
 
export default Contact;