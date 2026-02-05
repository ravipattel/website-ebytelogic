import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "@/supabase/supabaseClient";

export const getBlogsAPI = createAsyncThunk(
  "blogs/getAll",
  async (_, { rejectWithValue }) => {
    const { data: res, error } = await supabase.functions.invoke("blogs", {
      method: "GET",
    });
    if (error) {
      console.error("Error fetching blogs:", error);
      return rejectWithValue(error.message);
    }
    return res?.posts || [];
  }
);

export const getBlogByIdAPI = createAsyncThunk(
  "blogs/getById",
  async (id: string, { rejectWithValue }) => {
    const { data: res, error } = await supabase.functions.invoke(`blogs?id=${id}`, {
      method: "GET",
    });

    if (error) {
      console.error("Error fetching blog by ID:", error);
      return rejectWithValue(error.message);
    }

    return res;
  }
);

export const addBlogAPI = createAsyncThunk(
  "blogs/add",
  async (payload: FormData, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase.functions.invoke("blogs", {
        body: payload,
      });

      if (error) return rejectWithValue(error.message);

      return data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);


export const updateBlogAPI = createAsyncThunk(
  "blogs/update",
  async ({ id, payload }: { id: string; payload: any }, { rejectWithValue }) => {
    const { data: res, error } = await supabase.functions.invoke(`blogs?id=${id}`, {
      method: "PUT",
      body: payload,
    });

    if (error) {
      console.error("Error updating blog:", error);
      return rejectWithValue(error.message);
    }

    return res; 
  }
);

export const deleteBlogAPI = createAsyncThunk(
  "blogs/delete",
  async (id: string, { rejectWithValue }) => {
    const { data: res, error } = await supabase.functions.invoke(`blogs?id=${id}`, {
      method: "DELETE",
    });

    if (error) {
      console.error("Error deleting blog:", error);
      return rejectWithValue(error.message);
    }

    return id; 
  }
);
