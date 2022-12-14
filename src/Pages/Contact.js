import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home')
    }
    return (
        <div>
            <h1>This Conact Page</h1>
            <button onClick={handleClick}>Go to home page</button>
        </div>
    )
}

export default Contact
