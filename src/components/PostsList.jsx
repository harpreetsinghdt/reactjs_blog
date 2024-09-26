import React from "react";
import Post from "./Post";
import cls from "./PostsList.module.css";

const PostsList = () => {
  return (
    <ul className={cls.posts}>
      <Post author="Harpreet" body="React js is awesome" />
      <Post author="Siiengh" body="Typescript is static types" />
    </ul>
  );
};

export default PostsList;
