
import './App.css';
import { useGetAllPostQuery } from './services/post'

function App() {
  const {data: allPost, isLoading} = useGetAllPostQuery();
  if(isLoading){
    return <p>loading...</p>
  }
  console.log(allPost);
  return (
    <div className="App">
      <h2>Hello rtk query</h2>
    </div>
  );
}

export default App;
