import React from 'react';
import { useHistory } from 'react-router-dom';

const GetInTouch = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/contact');
    }
    
    return (
        <div className="text-center my-5">
            <h3 className="special text-center">Get in Touch</h3>
            <p className="mx-auto my-3" style={{ width: '500px'}}>I would love to hear from you anything, whether it's a question or something. Don't hesitate to drop a message. I am highly excited to work with you.</p>
            <h5 className="mb-3">Let's get Started</h5>
            <button onClick={handleClick} className="main-btn">Hire me</button>
        </div>
    );
};

export default GetInTouch;