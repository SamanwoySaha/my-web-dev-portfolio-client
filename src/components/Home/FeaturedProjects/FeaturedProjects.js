import React from 'react';
import './FeaturedProjects.css';
import FeaturedCard from '../../Shared/FeaturedCard/FeaturedCard';
import { projects } from '../../../fakeData/fakeData';
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
    return (
        <section className="featuredProjects">
            <div className="container">
            <div className="d-flex justify-content-between">
                    <h1 className="special mb-5">Some of my projects</h1>
                    <Link to='/projects' style={{height: '44px'}} className="main-btn">View all</Link>
                </div>
                <div className="row">
                    {
                        projects.slice(0, 3).map(project => <FeaturedCard data={project}></FeaturedCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;