import React from 'react';
import { projects } from '../../../fakeData/fakeData';
import DisplayCard from '../../Shared/DisplayCard/DisplayCard';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Projects.css';
import Fade from 'react-reveal/Fade';

const Projects = () => {
    return (
        <div>
            <Header></Header>
            <section className="projects">
                <div className="container px-0 mt-5">
                    <h1 className="special mb-5 heading">My Projects</h1>
                    <Fade>
                        <div className="row d-flex justify-content-between flex-wrap">
                            {
                                projects.map(project => <DisplayCard data={project}></DisplayCard>)
                            }
                        </div>
                    </Fade>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Projects;