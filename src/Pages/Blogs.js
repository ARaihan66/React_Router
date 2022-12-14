import React from 'react'
import { Link } from 'react-router-dom';

import { Info } from '../Data/Data'

const Blogs = () => {

    const dataSlice = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + '....';
        } else {
            return str;
        }
    }
    return (
        <div>
            {Info && Info.map((item) => {
                const { id, title, body } = item;
                return <section key={id}>
                    <h1>{title}</h1>
                    <p>{dataSlice(body, 300)} </p>
                    <Link to={title}>Learn more</Link>
                </section>
            })}
        </div>
    )
}

export default Blogs
