import React from "react";
import { useGetLimitByPostQuery } from "../services/post";

const GetPostByLimit = () => {
  const {
    data: allPost,
    isLoading,
    isError,
    error,
  } = useGetLimitByPostQuery(5);
  if (isLoading) {
    return <p>loading...</p>;
  }
  if (isError) {
    return <p>{error.error}</p>;
  }
  return (
    <div>
      <h1>Get post by limt using rtk query</h1>
      <h2>Limit post Number : {allPost.length}</h2>
      {allPost?.map((post, i) => (
        <div key={i}>
          <h3>
            {post.id}:{post.title}
          </h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default GetPostByLimit;
