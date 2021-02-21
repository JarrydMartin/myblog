import axios from "axios"
import useSWR from "swr"
import { Article } from "../models/Article";

const fetcher = url => axios.get(url).then(res => res.data);

export function useArticles<T> () {
  const { data, error } = useSWR<T>(`/api/article`, fetcher)
  return {
    articles: data,
    isLoading: !error && !data,
    isError: error
  }
}

export function useArticle(id){
  const { data, error } = useSWR<Article>(`/api/article/${id}`, fetcher)
  return {
    article: data,
    isLoading: !error && !data,
    isError: error
  }
}
