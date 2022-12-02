
import './App.css';
import AllPost from './component/AllPost';
import GetPostByLimit from './component/GetPostByLimit';
import CounterView from './services/counter/CounterView';
import { useDeletePostMutation, useCreatePostMutation } from './services/post';


function App() {
   const [createPost, responseInfo] = useCreatePostMutation(5);
   console.log(responseInfo);
   console.log('Data',responseInfo.data)
   console.log('DeletePost',responseInfo.isSuccess)

   const newPost ={
    title: 'fooball',
    body: 'barPost',
    userId: 1,
   }
 
  // console.log('all response from ', allPost);
  return (
    <div className="App">
      {/* <button onClick={() =>(deletePost(5))}>Delete</button> */}
      {/* <button onClick={() =>(createPost(newPost))}>Create</button> */}
      {/* <AllPost /> */}
      {/* <GetSinglePost /> */}
      {/* <GetPostByLimit /> */}
      <CounterView />
     
     
    </div>
  );
}

export default App;
