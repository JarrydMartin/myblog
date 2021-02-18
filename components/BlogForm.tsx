import React, { useContext } from 'react'
import { BlogContext } from '../lib/contexts';

const BlogForm = () => {
    const {blog, setBlog} = useContext(BlogContext);

    const handleChange = (e) => {
        setBlog({...blog, title: e.target.value})
    }

    return (
         <form>
         <label>
          Title:
          <input type="text" value={blog?.title} onChange={handleChange} />
          </label>
        <input type="submit" value="Submit" />
      </form>
    )
}

export default BlogForm
