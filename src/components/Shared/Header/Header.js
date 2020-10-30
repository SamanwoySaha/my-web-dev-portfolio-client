import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, useRouteMatch } from 'react-router-dom';
import './Header.css';
import Container from 'react-bootstrap/Container';
import { FaGithub, FaMediumM, FaLinkedinIn, FaStackOverflow } from "react-icons/fa";

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
                <div className="mr-auto mt-n1 d-none d-md-block">
                    <h6 className="header-icon-title d-inline badge badge-primary">Follow me</h6>
                    <a className="header-icon" href="http://github.com/SamanwoySaha"><FaGithub className="icon mx-3" /></a>
                    <a className="header-icon" href="https://medium.com/@samanwoy-saha"><FaMediumM className="icon mx-3" /></a>
                    <a className="header-icon" href="https://www.linkedin.com/in/samanwoy-saha/"><FaLinkedinIn className="icon mx-3" /></a>
                    <a className="header-icon" href="https://stackoverflow.com/users/14548043/samanwoy-saha"><FaStackOverflow className="icon mx-3" /></a>
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