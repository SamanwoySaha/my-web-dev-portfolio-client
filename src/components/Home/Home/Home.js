import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import FeaturedArticles from '../FeaturedArticles/FeaturedArticles';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';
import GetInTouch from '../GetInTouch/GetInTouch';
import './Home.css';
import Fade from 'react-reveal/Fade';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Fade>
                <Banner></Banner>
                <FeaturedProjects></FeaturedProjects>
                <FeaturedArticles></FeaturedArticles>
                <GetInTouch></GetInTouch>
            </Fade>
            <Footer></Footer>
        </div>
    );
};

export default Home;