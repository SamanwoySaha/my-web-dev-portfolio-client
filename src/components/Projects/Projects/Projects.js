import React from 'react';
import { projects } from '../../../fakeData/fakeData';
import DisplayCard from '../../Shared/DisplayCard/DisplayCard';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Projects.css';

const Projects = () => {
    return (
        <div>
            <Header></Header>
            <section className="container px-0 mt-5">
                <h1 className="special mb-5">My Projects</h1>
                <div className="row d-flex justify-content-between flex-wrap">
                    {
                        projects.map(project => <DisplayCard data={project}></DisplayCard>)
                    }
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Projects;