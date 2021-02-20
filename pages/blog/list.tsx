import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useBlogs } from "../../lib/useBlogs";
import { Blog } from "../../models/Blog";
import EditIcon from "@material-ui/icons/Edit";

const list = () => {
  const { blogs, isLoading } = useBlogs<Blog[]>();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <List>
      {blogs.map((blog) => {return (
        <ListItem>
          {blog.title}
          <a href={`${blog._id}`}>
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
