
import './App.css';
import { useGetAllPostQuery } from './services/post'

function App() {
  const {data: allPost, isLoading, isError, error} = useGetAllPostQuery();
  if(isLoading){
    return <p>loading...</p>
  }
  if(isError){
    return <p>{error.error}</p>
  }
  console.log('all response from ', allPost);
  return (
    <div className="App">
      <h2>allPost : {allPost.length}</h2>
    {
      allPost?.map((post, i) =>
       <div key={i}>
        <h3>{post.id}:{post.title}</h3>
        <p>{post.body}</p>
       </div>
      )
    }
    </div>
  );
}

export default App;
