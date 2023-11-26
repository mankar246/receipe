import React from "react";
import PostsList from "./PostsList";
import AddPostForm from "./AddPostForm";

export function Post() {
  return (
    <>
      <PostsList />
      <AddPostForm />
    </>
  );
}

export default Post;
