import React from 'react'

import { user } from '../Data/Data'

const Blogs = () => {
    return (
        <div>
            {user && user.map((item) => {
                const { id, title, body } = item;
                return <section key={id}>
                    <h1>{title}</h1>
                    <p>{body}</p>
                </section>
            })}
        </div>
    )
}

export default Blogs
