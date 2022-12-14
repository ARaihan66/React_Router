import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Info } from '../Data/Data';

const Blog = () => {
    const [data, setData] = useState(null);
    const { title } = useParams();
    useEffect(() => {
        const data = Info.filter(item => item.title === title);
        console.log(data)
        setData(data[0].body);
    }, [])
    return (
        <div>
            <h1>{title}</h1>
            <p>{data}</p>
        </div>
    )
}

export default Blog
