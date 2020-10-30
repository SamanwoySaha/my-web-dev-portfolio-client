import React from 'react';
import Container from 'react-bootstrap/Container';
import './Banner.css';
import { FaFilePdf, FaEnvelope } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { FaGithubSquare, FaMedium, FaLinkedin, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
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
                                        steps={['<>Hello World!</>', 2000, "I'm", 3000]}
                                        loop={Infinity}
                                        wrapper="h2"
                                    />
                                    <h1><span className="special">Samanwoy</span> Saha</h1>
                                    <h4 className="mb-3">Web Developer | Programmer</h4>
                                    <div className="d-inline">
                                        <a href="http://github.com/SamanwoySaha"><FaGithubSquare className="header-icon icon mr-2" /></a>
                                        <a href="https://medium.com/@samanwoy-saha"><FaMedium className="header-icon icon mx-2" /></a>
                                        <a href="https://www.linkedin.com/in/samanwoy-saha/"><FaLinkedin className="header-icon icon mx-2" /></a>
                                        <a href="#"><FaFacebookSquare className="header-icon icon mx-2" /></a>
                                        <a href="#"><FaTwitterSquare className="header-icon icon mx-2" /></a>
                                    </div>
                                </div>
                            </div>
                            <p style={{ width: '650px' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, enim sed incidunt culpa aut possimus. Dolor laborum nisi error dolore asperiores possimus magni iure quidem, totam dolorum, accusamus unde ratione.</p>
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