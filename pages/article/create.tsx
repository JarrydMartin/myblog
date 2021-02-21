import React, { useEffect, useState } from "react";
import { Article } from "../../models/Article";
import { BlogContext } from "../../lib/contexts";
import EditBlog from "../../components/EditBlog";
import axios from "axios";
import { Button, makeStyles, useTheme } from "@material-ui/core";
import { useShadowGlowStyle } from "../../lib/themeConstants";

const create = () => {
  const [article, setArticle] = useState<Article>(null);
  const classes = useShadowGlowStyle();

  useEffect(() => {
    setArticle({ _id: null, data: { blocks: [] }, title: "" });
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();
    axios.post<Article>("/api/post", article);
  };

  return (
    <BlogContext.Provider value={{ article: article, setArticle: setArticle }}>
      <EditBlog />
      <Button variant="outlined" onClick={handleCreate} className={classes.shadowGlow}>
        Create
      </Button>
    </BlogContext.Provider>
  );
};
export default create;


