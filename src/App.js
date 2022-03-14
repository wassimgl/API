import { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';
import UserList from './UserList';



  function App() {
    const  [datas, setData] = useState([]); 
    useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((abc)=>{
      setData(abc.data);
    });
  }, []);
  return (
    <div className="App">
      {datas.map((data,id)=>(
        <UserList key={id} userData={data}/>
      ))}
    </div>
  );
}

export default App;
