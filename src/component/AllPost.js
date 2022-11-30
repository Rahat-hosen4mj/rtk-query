import React from "react";
import { useGetAllPostQuery } from "../services/post";

const AllPost = () => {
  const { data: allPost, isLoading, isError, error } = useGetAllPostQuery();
  if (isLoading) {
    return <p>loading...</p>;
  }
  if (isError) {
    return <p>{error.error}</p>;
  }
  return (
    <div>
      <h1>Get all post usgin rtk query</h1>
      <h2>allPost : {allPost.length}</h2>
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

export default AllPost;
