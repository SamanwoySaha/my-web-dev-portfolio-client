import React from 'react';
import { Container } from 'react-bootstrap';
import { skills } from '../../../fakeData/fakeData';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { FaGithub, FaMediumM, FaLinkedinIn, FaStackOverflow } from "react-icons/fa";
import './About.css';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div>
            <Header></Header>
            <section className="about">
                <Container>
                    <div className="row mt-4">
                        <Fade>
                            <div className="col-md-8 mt-1 mx-auto text-center">
                                <h2 className="special mb-5">About Me</h2>
                                <img className="img-fluid w-25 profile-img mb-4" src="https://i.imgur.com/xjpx9j2.png" alt="" />
                                <h4 className="special">Hey, Welcome</h4>
                                <h5 className="mb-3">Let me introduce myself</h5>
                                <h2>I'm <span className="special">Samanwoy</span> Saha</h2>
                                <p>I am a Web Developer, Engineer and Musician. I love to learn new things everyday whether it's from programming or music or technology. I completed my graduation in Textile Engineering from Khulna University of Engineering &amp; Technology, Khulna. Besides, programming I play chess a lot which keeps thought process little bit cleaner during solving any coding problem.</p>
                                <div className="d-block">
                                    <a className="header-icon ml-n2" href="http://github.com/SamanwoySaha"><FaGithub className="icon mx-3" /></a>
                                    <a className="header-icon" href="https://medium.com/@samanwoy-saha"><FaMediumM className="icon mx-3" /></a>
                                    <a className="header-icon" href="https://www.linkedin.com/in/samanwoy-saha/"><FaLinkedinIn className="icon mx-3" /></a>
                                    <a className="header-icon" href="https://stackoverflow.com/users/14548043/samanwoy-saha"><FaStackOverflow className="icon mx-3" /></a>
                                </div>
                            </div>
                            <div className="w-100"></div>
                            <div className="col-md-6 mt-5 mx-auto">
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
                            <div className="col-md-9 mt-5 mx-auto">
                                <div className="skill-details mb-5">
                                    <h3 className="special mb-4">Education</h3>
                                    <div className="d-flex align-items-center">
                                        <img style={{ width: '17%' }} className="img-fluid" src="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Logo_KUET.svg/1200px-Logo_KUET.svg.png" alt="" />
                                        <div className="pt-4 ml-4">
                                            <h5>Khulna University of Engineering & Technology, Khulna.</h5>
                                            <p>B.Sc. in Textile Engineering <span style={{ color: '#777', fontSize: '16px' }}> (2016 - 2020)</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-details mb-5">
                                    <h3 className="special mb-4">Courses & Certificates</h3>
                                    <div className="d-flex align-items-center mb-3">
                                        <img style={{ width: '17%' }} className="img-fluid" src="https://i.imgur.com/dJRuYIK.png" alt="" />
                                        <div className="pt-4 ml-4">
                                            <h5>Programming Hero Bangla Web Course</h5>
                                            <p><span className="text-black-50">by</span> Programming Hero</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <img style={{ width: '17%' }} className="img-fluid" src="https://i.imgur.com/qSsZW16.png" alt="" />
                                        <div className="pt-4 ml-4">
                                            <h5>Front-End Web UI Frameworks and Tools: Bootstrap 4</h5>
                                            <p><span className="text-black-50">by</span> Coursera</p>
                                            <a href="https://coursera.org/share/fe20a806f41a52d3fe322789fa7252f4">See Credential</a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <img style={{ width: '17%' }} className="img-fluid" src="https://i.imgur.com/c4X8hUO.png" alt="" />
                                        <div className="pt-4 ml-4">
                                            <h5>Web Design & Wordpress theme customization Course</h5>
                                            <p><span className="text-black-50">by</span> Creative IT Institute, Khulna.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <img style={{ width: '17%' }} className="img-fluid" src="https://i.imgur.com/4fosYy2.jpg" alt="" />
                                        <div className="pt-4 ml-4">
                                            <h5>Graphic Design Course</h5>
                                            <p><span className="text-black-50">by</span> Learning &amp; Earning Development Project, ICT Division.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-details mb-5">
                                    <h3 className="special mb-4">Achievements & Awards</h3>
                                    <div className="d-flex align-items-center mb-3">
                                        <img style={{ width: '17%' }} className="img-fluid" src="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Logo_KUET.svg/1200px-Logo_KUET.svg.png" alt="" />
                                        <div className="pt-4 ml-4">
                                            <h5><strong>Champion</strong> - Inter Hall Chess Tounament - 2019</h5>
                                            <p><span style={{ color: '#777'}}>by</span> Khulna University of Engineering & Technology, Khulna.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <img style={{ width: '17%' }} className="img-fluid" src="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Logo_KUET.svg/1200px-Logo_KUET.svg.png" alt="" />
                                        <div className="pt-4 ml-4">
                                            <h5><strong>1st Runners Up</strong> - Intra Department Chess Tounament - 2019</h5>
                                            <p><span style={{ color: '#777'}}>by</span> Khulna University of Engineering & Technology, Khulna.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <img style={{ width: '17%' }} className="img-fluid" src="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Logo_KUET.svg/1200px-Logo_KUET.svg.png" alt="" />
                                        <div className="pt-4 ml-4">
                                            <h5><strong>Champion</strong> - Inter Department Chess Tounament - 2020</h5>
                                            <p><span style={{ color: '#777'}}>by</span> Khulna University of Engineering & Technology, Khulna.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </Container>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default About;