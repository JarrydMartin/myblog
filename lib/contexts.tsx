import { createContext, Dispatch } from "react";
import { Blog } from "../models/Blog";

export const BlogContext = createContext<{blog:Blog, setBlog: Dispatch<Blog>}>(null);