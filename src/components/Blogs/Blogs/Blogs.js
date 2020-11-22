import React from 'react';
import { blogs } from '../../../fakeData/fakeData';
import DisplayCard from '../../Shared/DisplayCard/DisplayCard';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Blogs.css';
import Fade from 'react-reveal/Fade';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <section className="blogs topSpacing">
                <div className="container px-0 mt-5">
                    <h1 className="special mb-5 heading">My Articles</h1>
                    <Fade>
                        <div className="row d-flex justify-content-between flex-wrap">
                            {
                                blogs.map((blog, index) => <DisplayCard key={index} data={blog}></DisplayCard>)
                            }
                        </div>
                    </Fade>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;