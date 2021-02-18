import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Blog } from "../../models/Blog";
import { BlogContext } from "../../lib/contexts";
import CreateBlog from "../../components/CreateBlog";

const create = () => {
  const [blog, setBlog] = useState<Blog>(null);

  useEffect(() => {
    setBlog({_id : "0", data: {blocks:[]},title:"blog"});
  }, [])

  return (
    <BlogContext.Provider value={{ blog, setBlog }}>
      <CreateBlog />
    </BlogContext.Provider>
  );
};
export default create;
