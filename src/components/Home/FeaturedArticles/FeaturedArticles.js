import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../../../fakeData/fakeData';
import DisplayCard from '../../Shared/DisplayCard/DisplayCard';
import './FeaturedArticles.css';

const FeaturedArticles = () => {
    return (
        <section className="featuredArticles">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <h1 className="special mb-5 heading">Some of my articles (Coming Soon...)</h1>
                    <Link to='/blogs' style={{height: '44px'}} className="main-btn">View all</Link>
                </div>
                <div className="row d-flex justify-content-between flex-wrap">
                    {
                        blogs.slice(0, 3).map((project, index) => <DisplayCard key={index} data={project}></DisplayCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default FeaturedArticles;