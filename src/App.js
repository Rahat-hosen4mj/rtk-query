
import './App.css';
import AllPost from './component/AllPost';
import GetPostByLimit from './component/GetPostByLimit';
import { useDeletePostMutation } from './services/post';


function App() {
   const [deletePost, responseInfo] = useDeletePostMutation(5);
   console.log(responseInfo);
   console.log('DeletePost',responseInfo.isSuccess)
 
  // console.log('all response from ', allPost);
  return (
    <div className="App">
      <button onClick={() =>(deletePost(5))}>Delete</button>
      {/* <AllPost /> */}
      {/* <GetSinglePost /> */}
      {/* <GetPostByLimit /> */}
     
     
    </div>
  );
}

export default App;
