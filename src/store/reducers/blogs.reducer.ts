import { createSlice } from "@reduxjs/toolkit";
import {
  getBlogsAPI,
  getBlogByIdAPI,
  addBlogAPI,
  updateBlogAPI,
  deleteBlogAPI,
} from "../action/blogs.action";

import { BlogsInitialStatType } from "@/src/types/BlogsInitialStatType";

const initialState: BlogsInitialStatType = {
  loading: "",
  message: "",
  error: false,
  apiName: "",
  alertType: "",
  blogs:[],
  blog:[]
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.alertType = "";
      state.apiName = "";
      state.message = "";
    },

    errorMessage: (state, action) => {
      state.alertType = action.payload.alertType;
      state.apiName = action.payload.apiName;
      state.message = action.payload.message;
    },
  },

  extraReducers: (builder) => {

    //Get All Blogs
    builder.addCase(getBlogsAPI.pending, (state) => {
      state.apiName = "blogs/getAll";
      state.loading = "blogs/getAll";
    });
    builder.addCase(getBlogsAPI.fulfilled, (state, { payload }: any) => {
      state.loading = "";
      state.alertType = "success";
      state.apiName = "blogs/getAll/fulfilled";
      state.message = "Fetched blogs successfully";
      state.blogs=payload
    });
    builder.addCase(getBlogsAPI.rejected, (state, { payload }: any) => {
      state.loading = "";
      state.alertType = "danger";
      state.apiName = "blogs/getAll/rejected";
      state.message = payload;
    });

    //Get Blogs By Id
    builder.addCase(getBlogByIdAPI.pending, (state) => {
      state.apiName = "blogs/getById";
      state.loading = "blogs/getById";
    });
    builder.addCase(getBlogByIdAPI.fulfilled, (state, { payload }: any) => {
      state.loading = "";
      state.alertType = "success";
      state.apiName = "blogs/getById/fulfilled";
      state.message = "Fetched blog details";
      state.blog=payload
    });
    builder.addCase(getBlogByIdAPI.rejected, (state, { payload }: any) => {
      state.loading = "";
      state.alertType = "danger";
      state.apiName = "blogs/getById/rejected";
      state.message = payload;
    });

    //Create Blogs
    builder.addCase(addBlogAPI.pending, (state) => {
      state.apiName = "blogs/add";
      state.loading = "blogs/add";
    });
    builder.addCase(addBlogAPI.fulfilled, (state, { payload }: any) => {
      state.loading = "";
      state.alertType = "success";
      state.apiName = "blogs/add/fulfilled";
      state.message = "Blog created successfully";
    });
    builder.addCase(addBlogAPI.rejected, (state, { payload }: any) => {
      state.loading = "";
      state.alertType = "danger";
      state.apiName = "blogs/add/rejected";
      state.message = payload
    });

    //Update Blogs
    builder.addCase(updateBlogAPI.pending, (state) => {
      state.apiName = "blogs/update";
      state.loading = "blogs/update";
    });
    builder.addCase(updateBlogAPI.fulfilled, (state, { payload }: any) => {
      state.loading = "";
      state.alertType = "success";
      state.apiName = "blogs/update/fulfilled";
      state.message = "Blog updated successfully";
    });
    builder.addCase(updateBlogAPI.rejected, (state, { payload }: any) => {
      state.loading = "";
      state.alertType = "danger";
      state.apiName = "blogs/update/rejected";
      state.message = payload;
    });

    //Delete Blogs
    builder.addCase(deleteBlogAPI.pending, (state) => {
      state.apiName = "blogs/delete";
      state.loading = "blogs/delete";
    });
    builder.addCase(deleteBlogAPI.fulfilled, (state, action) => {
      state.loading = "";
      state.alertType = "success";
      state.apiName = "blogs/delete/fulfilled";
      state.message = "Blog deleted successfully";
      state.blogs = state.blogs.filter(
        blog => blog.id !== action.meta.arg
    );
    });
    builder.addCase(deleteBlogAPI.rejected, (state, { payload }: any) => {
      state.loading = "";
      state.alertType = "danger";
      state.apiName = "blogs/delete/rejected";
      state.message = payload;
    });
  },
});

export const { clearMessage, errorMessage } = blogSlice.actions;
export default blogSlice.reducer;
