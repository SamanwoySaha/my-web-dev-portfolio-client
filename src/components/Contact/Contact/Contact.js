import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <Header></Header>
            <section className="contact">
                <form
                    action="https://formspree.io/f/mleondoe"
                    method="POST"
                >
                <input className="form-control" type="text" name="name" placeholder="Your Name"/>
                <input className="form-control" type="email" name="email" placeholder="Your Email"/>
                <textarea className="form-control message" name="message" placeholder="Your Message"></textarea>
                <button className="main-btn" type="submit">Send</button>
                </form>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Contact;