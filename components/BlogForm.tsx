import { makeStyles, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { BlogContext } from "../lib/contexts";

const BlogForm = () => {
  const { article: blog, setArticle: setBlog } = useContext(BlogContext);
  const classes = useStyles();

  const handleChange = (e) => {
    setBlog({ ...blog, title: e.target.value });
  };

  return (
    <TextField
      label="Title"
      fullWidth
      color="secondary"
      value={blog?.title}
      onChange={handleChange}
      size="medium"
      InputLabelProps={{className:classes.root}}
    />
  );
};

export default BlogForm;

const useStyles = makeStyles({
  root: {
    color:"#fff"
  }
});
