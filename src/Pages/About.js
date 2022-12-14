import React from 'react';
import { useNavigate } from 'react-router-dom';
const About = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home')
    }
    return (
        <div>
            <h1>This is About page</h1>
            <button onClick={handleClick}>Go to home page</button>
        </div>
    )
}

export default About
