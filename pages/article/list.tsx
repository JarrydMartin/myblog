import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useArticles } from "../../lib/useArticles";
import { Article } from "../../models/Article";
import EditIcon from "@material-ui/icons/Edit";

const list = () => {
  const { articles, isLoading } = useArticles<Article[]>();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <List>
      {articles.map((article) => {return (
        <ListItem>
          {article.title}
          <a href={`${article._id}`}>
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit">
                <EditIcon />
                </IconButton>
            </ListItemSecondaryAction>
          </a>
        </ListItem>)
      })}
    </List>
  );
};

export default list;
