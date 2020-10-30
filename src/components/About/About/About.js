import React from 'react';
import { Container } from 'react-bootstrap';
import { skills } from '../../../fakeData/fakeData';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { FaGithubSquare, FaMedium, FaLinkedin, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import './About.css';

const About = () => {
    return (
        <div>
            <Header></Header>
            <section className="about">
                <Container>
                    <div className="row mt-5 d-flex justify-content-between align-items-center">
                        <div className="col-md-6 mt-5">
                            <img className="img-fluid profile-img mb-3" src="https://i.imgur.com/xjpx9j2.png" alt="" />
                            <h2>I'm <span className="special">Samanwoy</span> Saha</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam laborum facere, neque veritatis obcaecati deleniti repellendus eligendi. Inventore, quasi ex unde saepe at magnam iusto doloremque laboriosam ipsum dolore quibusdam?</p>
                            <div className="d-block">
                                <a href="http://github.com/SamanwoySaha"><FaGithubSquare className="header-icon icon mr-2" /></a>
                                <a href="https://medium.com/@samanwoy-saha"><FaMedium className="header-icon icon mx-2" /></a>
                                <a href="https://www.linkedin.com/in/samanwoy-saha/"><FaLinkedin className="header-icon icon mx-2" /></a>
                                <a href="#"><FaFacebookSquare className="header-icon icon mx-2" /></a>
                                <a href="#"><FaTwitterSquare className="header-icon icon mx-2" /></a>
                            </div>
                        </div>
                        <div className="col-md-6 mt-5">
                            <div className="skill-details">
                                <div className="mb-4">
                                    <h3 className="about-subHeading"><span className="special">My Skill</span> Set</h3>
                                    <h6>Expertise: {skills.expertise.map(skill => <span className="mr-1 my-1 badge badge-info">{skill}</span>)}</h6>
                                    <h6>Comfortable: {skills.comfortable.map(skill => <span className="mr-1 my-1 badge badge-info">{skill}</span>)}</h6>
                                    <h6>Familiar: {skills.familiar.map(skill => <span className="mr-1 my-1 badge badge-info">{skill}</span>)}</h6>
                                    <h6>Tools: {skills.tools.map(skill => <span className="mr-1 my-1 badge badge-info">{skill}</span>)}</h6>
                                    <h6>Others: {skills.others.map(skill => <span className="mr-1 my-1 badge badge-info">{skill}</span>)}</h6>
                                </div>
                                <div className="mb-4">
                                    <h3 className="about-subHeading"><span className="special">Eager to work</span> with</h3>
                                    <h6>Others: {skills.workingSkills.map(skill => <span className="mr-1 my-1 badge badge-info">{skill}</span>)}</h6>
                                </div>
                                <div className="mb-4">
                                    <h3 className="about-subHeading">Prefer <span className="special">not to work</span> with</h3>
                                    <h6>Others: {skills.nonWorkingSkills.map(skill => <span className="mr-1 my-1 badge badge-info">{skill}</span>)}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default About;