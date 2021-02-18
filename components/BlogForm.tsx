import { TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { BlogContext } from "../lib/contexts";

const BlogForm = () => {
  const { blog, setBlog } = useContext(BlogContext);

  const handleChange = (e) => {
    setBlog({ ...blog, title: e.target.value });
  };

  return (
    <TextField
      id="standard-basic"
      label="Title"
      value={blog?.title}
      onChange={handleChange}
    />
  );
};

export default BlogForm;