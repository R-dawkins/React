import { useEffect, useState } from 'react';
import './App.css';
import Dwitt from './components/Dwitt';
import Member from './components/Member';
import Button from './components/Updatebutton';
function App() {
  const [state,setState] = useState(false);
  const handleClick = (event) => setState(!state)
  const [dwittList,setDwittList] = useState([]);
  useEffect(()=>{
    fetch('/data/dwittlist.json')
    .then(res=>res.json())
    .then(data=>setDwittList(data)) //dwittList에 fetch로 받아와서 json()까지 한 (data) 삽입
  },[])
  
  return (
    <div>
      <h1>Dwitter</h1>
      <ul>
        <li>All Dwitter</li>
        <li>My Dwitter</li>
        <li><a href='#' onClick={handleClick}>Login / Sign</a></li>
      </ul>
      {state && <Member/>}
      <hr />
        {dwittList.map((list)=>
      <Dwitt
      image={list.url}
      name={list.name}
      id={list.id}
      date={list.date}
      content={list.content}
      />
        )}
    </div>
  );
}

export default App;
