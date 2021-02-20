import axios from "axios"
import useSWR from "swr"

const fetcher = url => axios.get(url).then(res => res.data);

export function useBlogs<T> () {
  const { data, error } = useSWR<T>(`/api/post`, fetcher)
  return {
    blogs: data,
    isLoading: !error && !data,
    isError: error
  }
} 
