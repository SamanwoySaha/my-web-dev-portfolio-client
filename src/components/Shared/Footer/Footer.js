import React from 'react';
import './Footer.css';
import { FaStar } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaCodeBranch } from 'react-icons/fa';

const Footer = () => {
    return (
        <section className="footer text-center">
            <p className="mb-2">
                Designed and Developed by 
                <a className="ml-1 special" href="https://github.com/SamanwoySaha">Samanwoy Saha</a>
            </p>
            <p><FaStar className="icon footer-icon"/> Stars &amp; <FaCodeBranch className="icon footer-icon"/> Forks on 
                <a className='special' href="https://github.com/SamanwoySaha"><FaGithub className="icon footer-icon mx-1"/>Github</a>
            </p>
        </section>
    );
};

export default Footer;