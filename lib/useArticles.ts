import axios from "axios"
import useSWR from "swr"

const fetcher = url => axios.get(url).then(res => res.data);

export function useArticles<T> () {
  const { data, error } = useSWR<T>(`/api/article`, fetcher)
  return {
    articles: data,
    isLoading: !error && !data,
    isError: error
  }
} 
