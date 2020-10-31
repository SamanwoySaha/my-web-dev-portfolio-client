import React from 'react';
import './NoMatch';
import Header from '../Shared/Header/Header';

const NoMatch = () => {
    return (
        <div>
            <Header></Header>
            <img src="https://i.imgur.com/nufX7I3.png" alt="" className="img-fluid w-100" style={{ height: '100vh'}}/>
        </div>
    );
};

export default NoMatch;