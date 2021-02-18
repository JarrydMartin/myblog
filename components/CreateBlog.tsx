import dynamic from 'next/dynamic';
import React, { useContext } from 'react'
import { BlogContext } from '../lib/contexts'
const Editor = dynamic(() => import("../components/Editor"), { ssr: false });

const CreateBlog = () => {
    const {blog, setBlog} = useContext(BlogContext);

    
    return (
        <div>
            <Editor />  
        </div>
    )
}

export default CreateBlog
