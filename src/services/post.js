import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
      getAllPost: builder.query({
        query: () =>({
            url: 'posts',
            method: 'GET'
        })
      }),
      getPostById: builder.query({
        query: (id) =>{
            console.log('single post id: ',id);
           return{
            url: `posts/${id}`,
            method: 'GET'
           }
        }
      }),
      getLimitByPost: builder.query({
        query: (num) =>{
            console.log('get limit post by number: ',num);
           return{
            url: `posts?_limit=${num}`,
            method: 'GET'
           }
        }
      }),
      deletePost: builder.mutation({
        query: (id) =>{
            console.log('get limit post by number: ',id);
           return{
            url: `posts/${id}`,
            method: 'DELETE'
           }
        }
      }),
    }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useGetAllPostQuery, useGetPostByIdQuery, useGetLimitByPostQuery, useDeletePostMutation } = postApi