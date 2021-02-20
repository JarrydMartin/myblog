import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Blog } from '../../models/Blog';

const List = () => {

    const [blogs, setBlogs] = useState<Blog[]>();

    async function getBlogs(){
        const result = await axios.get<Blog[]>('/api/post');
        setBlogs(result.data);
    };
    useEffect(() => {
        getBlogs();
    }, [])
    return (
        <div>
            <pre>
                {JSON.stringify(blogs, null, 2)}
            </pre>
        </div>
    )
}

export default List