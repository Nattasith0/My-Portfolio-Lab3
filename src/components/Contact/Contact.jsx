// src/components/Contact/Contact.jsx - Template
import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="contact section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">
                    Have a project in mind? Let's work together!
                </p>

                <form 
                    className="contact-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert('Message sent!');
                    }}
                >
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" placeholder="Your message" required></textarea>
                    </div>

                    <button type="submit" className="btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;