import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, useRouteMatch } from 'react-router-dom';
import './Header.css';
import Container from 'react-bootstrap/Container';
import { FaGithub, FaMediumM, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa";

const Header = () => {
    const {path} = useRouteMatch();
    const activeHome = (path === '/' || path === '/home') ? 'active' : '';
    const activeProjects = (path === '/projects') ? 'active' : '';
    const activeBlogs = (path === '/blogs') ? 'active' : '';
    const activeAbout = (path === '/about') ? 'active' : '';
    const activeContact = (path === '/contact') ? 'active' : '';
    const activeResume = (path === '/resume') ? 'active' : '';
    
    return (
        <Navbar className="mt-3" bg="white" variant="light">
            <Container>
                <div className="mr-auto mt-n1">
                    <h6 className="header-icon-title d-inline">Follow me</h6>
                    <a href="http://github.com/SamanwoySaha"><FaGithub className="header-icon icon mx-3" /></a>
                    <a href="https://medium.com/@samanwoy-saha"><FaMediumM className="header-icon icon mx-3" /></a>
                    <a href="https://www.linkedin.com/in/samanwoy-saha/"><FaLinkedinIn className="header-icon icon mx-3" /></a>
                    <a href="#"><FaFacebook className="header-icon icon mx-3" /></a>
                    <a href="#"><FaTwitter className="header-icon icon mx-3" /></a>
                </div>
                <Nav className="ml-auto">
                    <Link className={`header-link ${activeHome}`} to="/">Home</Link>
                    <Link className={`header-link ${activeProjects}`} to="/projects">Projects</Link>
                    <Link className={`header-link ${activeBlogs}`} to="/blogs">Blogs</Link>
                    <Link className={`header-link ${activeAbout}`} to="/about">About</Link>
                    <Link className={`header-link ${activeContact}`} to="/contact">Contact</Link>
                    <Link className={`header-link ${activeResume}`} to="/resume">Resume</Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;