import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Blog } from "../../models/Blog";
import { BlogContext } from "../../lib/contexts";
import EditBlog from "../../components/EditBlog";
import axios from "axios";

const create = () => {
  const [blog, setBlog] = useState<Blog>(null);

  useEffect(() => {
    setBlog({_id : null, data: {blocks:[]},title:"New Blog"});
  }, [])

  const handleCreate = (e) =>{
    e.preventDefault();
    axios.post<Blog>('/api/post', blog);
  }

  return (
    <BlogContext.Provider value={{ blog, setBlog }}>
      <EditBlog />
      <button type="submit" onClick={handleCreate}>Create</button>
    </BlogContext.Provider>
  );
};
export default create;
