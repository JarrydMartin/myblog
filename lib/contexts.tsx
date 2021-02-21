import { createContext, Dispatch } from "react";
import { Article } from "../models/Article";

export const BlogContext = createContext<{article:Article, setArticle: Dispatch<Article>}>(null);