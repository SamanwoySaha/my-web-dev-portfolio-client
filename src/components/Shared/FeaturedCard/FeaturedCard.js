import React from 'react';
import './FeaturedCard.css';
import { FaGithub, FaFirefoxBrowser } from 'react-icons/fa';

const FeaturedCard = ({ data }) => {
    const { name, description, image, liveLink, technologies } = data;

    return (
        <div className="row featuredCard d-flex align-items-center">
            <div className="col-md-6">
                <img style={{ borderRadius: '5px' }} src={image} className="img-fluid" alt="" />
            </div>
            <div className="col-md-2">
                <img className="img-fluid" src="https://i.imgur.com/U2LDuNB.png" alt="" />
            </div>
            <div className="featuredCard-content col-md-4 px-4">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <h6>{technologies.map(technology => <span className="mr-1 my-1 badge badge-info">{technology}</span>)}</h6>
                <div className="d-flex align-items-center justify-content-between">
                    <a href={liveLink} className="card-footer-content">
                        <FaFirefoxBrowser className="icon mt-n1" /> Live Project
                    </a>
                    {data.githubClient && <a href={data.githubClient} className="card-footer-content ml-auto mr-1"><FaGithub className="icon ml-1 mt-n1" /> Client</a>}
                    {data.githubServer && <a href={data.githubServer} className="card-footer-content"><FaGithub className="icon ml-1 mt-n1" /> Server</a>}
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;