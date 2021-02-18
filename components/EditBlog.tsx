import dynamic from 'next/dynamic';
import React, { useContext } from 'react'
import { BlogContext } from '../lib/contexts'
import BlogForm from './BlogForm';
const Editor = dynamic(() => import("./Editor"), { ssr: false });

const EditBlog = () => {
    const {blog, setBlog} = useContext(BlogContext);

    return (
        <div>
            <BlogForm />
            <Editor />  
        </div>
    )
}

export default EditBlog
