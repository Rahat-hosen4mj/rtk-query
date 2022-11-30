import React from 'react';
import { useGetPostByIdQuery } from '../services/post';

const GetSinglePost = () => {
    const {data: singlePost, isLoading, isError, error} = useGetPostByIdQuery(6);
    if(isLoading){
      return <p>loading...</p>
    }
    if(isError){
      return <p>{error.error}</p>
    }
    return (
        <div>
             <h1>Get post by limt using rtk query</h1>
             <h2>{singlePost.id} :  {singlePost.title}</h2>
      <p>{singlePost.body}</p>
        </div>
    );
};

export default GetSinglePost;