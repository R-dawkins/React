import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Video (){
  const navigate = useNavigate();
  const [text,setText] = useState('');
  console.log(text);
  function handleChange(e){
    setText(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log(e.target.videoId.value);
    setText('') // submit 이벤트가 일어났을 때 input 초기화
    //{text파라미터}를 /video/{text파라미터}로 전송
    //useNavigate node의 redirect와 비슷한 역할을 한다.
    navigate(`/video/${text}`)
    //* Returns the context (if provided) for the child route at this level of the route
    //* hierarchy(계층).
  }
  return(
    <>
      <div>Video Page</div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="videoId" placeholder="Video Id" value={text} onChange={handleChange}/>
      </form>
    </>
  );
}