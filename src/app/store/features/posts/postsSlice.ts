"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PostsState {
  posts: [];
}

const initialState: PostsState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setAllPosts: (state, action) => {
      // set to LS
      localStorage.setItem("posts", JSON.stringify(action.payload));
      state.posts = action.payload;
    },
    deletePostById: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      // set to LS
      localStorage.setItem("posts", JSON.stringify(state.posts));
      // let posts: [] = state.posts;
      // posts = posts.filter((post) => post.id !== action.payload);
      // state.posts = posts;
    },
    getPosts: (state) => {
      // get from LS
      const posts: any = localStorage.getItem("posts");
      if (posts) {
        state.posts = JSON.parse(posts);
      }
    },
  },
});

export const { setAllPosts, deletePostById, getPosts } = postsSlice.actions;

export default postsSlice.reducer;
