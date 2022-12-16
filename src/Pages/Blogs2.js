import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Info } from '../Data/Data'

const Blogs2 = () => {
    const [data, setData] = useState(Info);

    const dataSlice = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + '....';
        } else {
            return str;
        }
    }

    return (
        <div>
            {Info.map(item => {
                const { id, title, body } = item;
                return <section key={id}>
                    <h2>{title}</h2>
                    <p>{dataSlice(body, 500)}</p>
                    <Link to={title} state={{ id, title, body }}>Learn more</Link>
                </section>
            })}
        </div>
    )
}

export default Blogs2
