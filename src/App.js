
import './App.css';
import { useGetPostByIdQuery } from './services/post'

function App() {
  // const {data: allPost, isLoading, isError, error} = useGetAllPostQuery();
   const {data: singlePost, isLoading, isError, error} = useGetPostByIdQuery(6);
  if(isLoading){
    return <p>loading...</p>
  }
  if(isError){
    return <p>{error.error}</p>
  }
  // console.log('all response from ', allPost);
  return (
    <div className="App">
      {/* <h2>allPost : {allPost.length}</h2>
    {
      allPost?.map((post, i) =>
       <div key={i}>
        <h3>{post.id}:{post.title}</h3>
        <p>{post.body}</p>
       </div>
      )
    } */}
    <h2>Get a single post using rtk query</h2>
      <h2>{singlePost.id} :  {singlePost.title}</h2>
      <p>{singlePost.body}</p>
    </div>
  );
}

export default App;
