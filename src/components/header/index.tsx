"use client";
import React, { useMemo, useEffect, use } from "react";
import Link from "next/link";

// import styles
import s from "./index.module.scss";
// redux
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "@/app/store/features/posts/postsSlice";

const Header = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: any) => state.posts.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const counter = useMemo(() => {
    return posts.length;
  }, [posts]);

  return (
    <>
      <div className={s.header}>HEADER {counter > 0 ? counter : null}</div>
      <Link href="/redux">Redux</Link>
      <Link href="/">Home</Link>
    </>
  );
};

export default Header;
