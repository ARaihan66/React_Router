import { useSearchParams } from 'react-router-dom'
import { useState } from 'react';

const UseSearchParamsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [user, setUser] = useState({ name: '', email: '' });

    const { name, email } = user;

    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchParams({
            name: name,
            email: email
        })
    }

    return (
        <div>
            <h1>UseSearchParams</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter Your Name' name='name' value={name} onChange={handleChange} />
                <input type='email' placeholder='Enter Email' name='email' value={email} onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>
            <h4>{searchParams.get({ name })}</h4>
            <h4>{searchParams.get({ email })}</h4>
        </div>
    )
}

export default UseSearchParamsPage
