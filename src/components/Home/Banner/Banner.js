import React from 'react';
import Container from 'react-bootstrap/Container';
import './Banner.css';
import { FaFilePdf, FaEnvelope } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

const Banner = () => {
    const history = useHistory();
    const handleGotoContact = () => {
        history.push('/contact');
    }

    return (
        <div className="banner">
            <Container className="px-0">
                <div className="row">
                    <div className="col-md-6">
                    </div>
                    <div className="col-md-6">
                        <div className="banner-content text-right">
                            <img className="img-fluid w-50" src="https://i.imgur.com/xjpx9j2.png" alt=""/>
                            <h2>Hello, I'm</h2>
                            <h1><span className="special">Samanwoy</span> Saha</h1>
                            <h3>Web Developer | Programmer</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, enim sed incidunt culpa aut possimus. Dolor laborum nisi error dolore asperiores possimus magni iure quidem, totam dolorum, accusamus unde ratione.</p>
                            <button className="main-btn">
                                <a href='https://drive.google.com/file/d/1sDs2G2lW3txrw5QsLxhjJ0xSHE5-ImWL/view?usp=sharing'>
                                    <FaFilePdf className="icon mr-1"/> Download Resume
                                </a>
                            </button>
                            <button onClick={handleGotoContact} className="main-btn">
                                <FaEnvelope className="icon mr-1"/> Hire me
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;