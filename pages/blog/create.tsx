import React, { useEffect, useState } from "react";
import { Blog } from "../../models/Blog";
import { BlogContext } from "../../lib/contexts";
import EditBlog from "../../components/EditBlog";
import axios from "axios";
import { Button, makeStyles, useTheme } from "@material-ui/core";
import { useShadowGlowStyle } from "../../lib/themeConstants";

const create = () => {
  const [blog, setBlog] = useState<Blog>(null);
  const classes = useShadowGlowStyle();

  useEffect(() => {
    setBlog({ _id: null, data: { blocks: [] }, title: "" });
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();
    axios.post<Blog>("/api/post", blog);
  };

  return (
    <BlogContext.Provider value={{ blog, setBlog }}>
      <EditBlog />
      <Button variant="outlined" onClick={handleCreate} className={classes.shadowGlow}>
        {" "}
        Create{" "}
      </Button>
    </BlogContext.Provider>
  );
};
export default create;


