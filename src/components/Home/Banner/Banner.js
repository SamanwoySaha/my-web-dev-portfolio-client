import React from 'react';
import Container from 'react-bootstrap/Container';
import './Banner.css';
import { FaFilePdf, FaEnvelope } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { FaGithub, FaMediumM, FaLinkedinIn, FaStackOverflow } from "react-icons/fa";
import Typical from 'react-typical';

const Banner = () => {
    const history = useHistory();
    const handleGotoContact = () => {
        history.push('/contact');
    }

    return (
        <section className="banner">
            <Container className="px-0">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <img className="img-fluid banner-content" src="https://i.imgur.com/ja4BAdq.png" alt="" />
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <div className="banner-content" style={{ marginLeft: '100px' }}>
                            <div className="d-flex align-items-center mb-4">
                                <img className="img-fluid profile-img mr-4" src="https://i.imgur.com/xjpx9j2.png" alt="" />
                                <div className="text-left">
                                    <Typical
                                        steps={["Hey, Welcome", 2000, "I'm", 4000]}
                                        loop={Infinity}
                                        wrapper="h2"
                                    />
                                    <h1><span className="special">Samanwoy</span> Saha</h1>
                                    <Typical
                                        steps={["Web Developer", 2000, "Programmer", 2000, 'Web Developer | Programmer', 2000]}
                                        loop={Infinity}
                                        wrapper="h4"
                                        className="mb-3"
                                    />
                                    <div className="d-inline">
                                        <a className="header-icon ml-n2" href="http://github.com/SamanwoySaha"><FaGithub className="icon mx-3" /></a>
                                        <a className="header-icon" href="https://medium.com/@samanwoy-saha"><FaMediumM className="icon mx-3" /></a>
                                        <a className="header-icon" href="https://www.linkedin.com/in/samanwoy-saha/"><FaLinkedinIn className="icon mx-3" /></a>
                                        <a className="header-icon" href="https://stackoverflow.com/users/14548043/samanwoy-saha"><FaStackOverflow className="icon mx-3" /></a>
                                    </div>
                                </div>
                            </div>
                            <p style={{ width: '650px' }}>Fix the cause, not the symtom and first, visualize then execute are my motto in programming. Hey, Welcome. Let me introduce myself. I am Samanwoy Saha, a Web Developer and Engineer.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <button onClick={handleGotoContact} className="main-btn ml-0">
                                        <FaEnvelope className="icon mr-1" /> Hire me
                                    </button>
                                    <button className="main-btn">
                                        <a href='https://drive.google.com/file/d/1sDs2G2lW3txrw5QsLxhjJ0xSHE5-ImWL/view?usp=sharing'>
                                            <FaFilePdf className="icon mr-1" /> Download Resume
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Banner;