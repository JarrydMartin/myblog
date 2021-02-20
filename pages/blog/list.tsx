import { List, ListItem } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useSWR from 'swr';
import { useBlogs } from '../../lib/useBlogs';
import { Blog } from '../../models/Blog';


const list = () => {

    const {blogs,isLoading} = useBlogs<Blog[]>();


    if(isLoading){
        return <p>Loading...</p>
    }

    return (
        <List>
              {blogs.map(blog => <ListItem>{blog.title}</ListItem>)}
        </List>
    )
}

export default list