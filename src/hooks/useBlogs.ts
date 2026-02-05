import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/src/store";

import {
  getBlogsAPI,
  getBlogByIdAPI,
  addBlogAPI,
  updateBlogAPI,
  deleteBlogAPI,
} from "../store/action/blogs.action";
import { clearMessage } from "../store/reducers/blogs.reducer";


export const useBlogs = () => {
  const {
    loading,
    message,
    error,
    apiName,
    alertType,
    blogs
  } = useSelector((state: RootState) => state.blogs);

  const dispatch = useDispatch<AppDispatch>();

  // GET all blogs
  const viewBlogs = async () => {
    return await dispatch(getBlogsAPI());
  };

  // GET single blog
  const viewBlogById = async (id: string) => {
    return await dispatch(getBlogByIdAPI(id));
  };

  // CREATE blog
  const createBlog = async (data: any) => {
    return await dispatch(addBlogAPI(data)).unwrap();
  };

  // UPDATE blog
  const editBlog = async (id: string, data: any) => {
    return await dispatch(updateBlogAPI({ id, payload: data })).unwrap();;
  };

  // DELETE blog
  const deleteBlog = async (id: string) => {
    return await dispatch(deleteBlogAPI(id));
  };

  const closeAlert = () => {
    dispatch(clearMessage());
  };

  return {
    loading,
    message,
    error,
    apiName,
    alertType,
    blogs,
    closeAlert,
    viewBlogs,
    viewBlogById,
    createBlog,
    editBlog,
    deleteBlog,
  };
};

export default useBlogs;
