import React from 'react';
import './DisplayCard.css';
import { FaGithub, FaFirefoxBrowser } from 'react-icons/fa';
import { useRouteMatch } from 'react-router-dom';

const DisplayCard = ({ data }) => {
    const { name, description, image, liveLink, technologies } = data;
    const {path} = useRouteMatch();

    return (
        <div className="card">
            <img src={image} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <h6>{technologies.map(technology => <span className="mr-1 my-1 badge badge-info">{technology}</span>)}</h6>
                <div className="card-footer d-flex align-items-center justify-content-between">
                    <a href={liveLink} className="card-footer-content">
                        {
                            path === '/projects' ? <><FaFirefoxBrowser className="icon mt-n1" /> Live Project</>
                            : <><FaFirefoxBrowser className="icon mt-n1" /> View Article</>
                        }
                    </a>
                    {data.githubClient && <a href={data.githubClient} className="card-footer-content ml-auto mr-1"><FaGithub className="icon ml-1 mt-n1" /> Client</a>}
                    {data.githubServer && <a href={data.githubServer} className="card-footer-content"><FaGithub className="icon ml-1 mt-n1" /> Server</a>}
                    {data.date && <p className="date">{data.date}</p>}
                </div>
            </div>
        </div>
    );
};

export default DisplayCard;