"use client";
import React, { useEffect, useState } from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import {
  setAllPosts,
  deletePostById,
} from "../store/features/posts/postsSlice";

const index = (props: any) => {
  // set react state
  const [posts, setPosts] = useState(props.posts);
  // get redux state
  const redux_posts = useSelector((state: any) => state.posts.posts);
  // create dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAllPosts(props.posts));
  }, []);
  // set react state
  useEffect(() => {
    setPosts(redux_posts);
  }, [redux_posts]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Redux</h2>
            {posts.map((post) => {
              return (
                <div key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  <div
                    // onClick={dispatch(deletePostById(post.id))}
                    onClick={() => dispatch(deletePostById(post.id))}
                    className="btn btn-danger"
                  >
                    Delete
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
