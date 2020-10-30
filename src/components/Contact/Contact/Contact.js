import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Contact.css';
import Fade from 'react-reveal/Fade';

const Contact = () => {
    return (
        <div>
            <Header></Header>
            <section className="contact-container">
                <div className="container">
                    <Fade>
                        <div className="row">
                            <div className="col-md-6">
                                <img className="img-fluid" src="https://i.imgur.com/IfR4RwG.png" alt="" />
                            </div>
                            <div className="col-md-6">
                                <h2 className="special text-center contact-title">Get in Touch</h2>
                                <form
                                    className="contact"
                                    action="https://formspree.io/f/mleondoe"
                                    method="POST"
                                >
                                    <input className="form-control" type="text" name="name" placeholder="Your Name" />
                                    <input className="form-control" type="email" name="email" placeholder="Your Email" />
                                    <textarea className="form-control message" name="message" placeholder="Your Message"></textarea>
                                    <button className="main-btn" type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Contact;