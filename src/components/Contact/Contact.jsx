// src/components/Contact/Contact.jsx
import './Contact.css';
import {
    FiMail, FiPhone, FiMapPin,
    FiGithub, FiLinkedin, FiTwitter
} from 'react-icons/fi';

function Contact() {
    // TODO: เปลี่ยนข้อมูลด้านซ้ายให้เป็นของคุณ
    const CONTACT = {
        email: 'Nattasitth_ma67@live.ac.th',
        phone: '+66 12 345 6789',
        location: 'Chiang Mai, Thailand',
        socials: {
            github: 'https://github.com/Nattasith0',
            linkedin: 'https://www.linkedin.com/in/yourname',
            twitter: 'https://twitter.com/yourname'
        }
    };

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-grid">
                    <aside className="contact-info">
                        <h3 className="info-title">Let's work together</h3>
                        <p className="info-subtitle">
                            I'm always interested in hearing about new projects and opportunities.
                        </p>

                        <ul className="info-list">
                            <li>
                                <span className="info-icon"><FiMail /></span>
                                <a href={`mailto:${CONTACT.email}`} className="info-link">
                                    {CONTACT.email}
                                </a>
                            </li>
                            <li>
                                <span className="info-icon"><FiPhone /></span>
                                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="info-link">
                                    {CONTACT.phone}
                                </a>
                            </li>
                            <li>
                                <span className="info-icon"><FiMapPin /></span>
                                <span>{CONTACT.location}</span>
                            </li>
                        </ul>

                        <div className="socials">
                            <a href={CONTACT.socials.github} aria-label="GitHub" target="_blank" rel="noreferrer" className="social-btn">
                                <FiGithub />
                            </a>
                            <a href={CONTACT.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer" className="social-btn">
                                <FiLinkedin />
                            </a>
                            <a href={CONTACT.socials.twitter} aria-label="Twitter" target="_blank" rel="noreferrer" className="social-btn">
                                <FiTwitter />
                            </a>
                        </div>
                    </aside>

                    <div className="contact-card">
                        <form
                            className="contact-form"
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert('Message sent!');
                            }}
                        >
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input type="email" id="email" name="email" placeholder="Your Email" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea id="message" name="message" rows="6" placeholder="Your Message" required></textarea>
                            </div>

                            <button type="submit" className="btn-primary btn-pill">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
