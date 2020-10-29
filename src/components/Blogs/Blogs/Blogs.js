import React from 'react';
import { blogs } from '../../../fakeData/fakeData';
import DisplayCard from '../../Shared/DisplayCard/DisplayCard';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <section className="container px-0 mt-5">
                <h1 className="special mb-5">My Articles (Coming Soon...)</h1>
                <div className="row d-flex justify-content-between flex-wrap">
                    {
                        blogs.map(blog => <DisplayCard data={blog}></DisplayCard>)
                    }
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;