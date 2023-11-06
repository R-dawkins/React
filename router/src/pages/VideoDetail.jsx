import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail(){
    const {videoId} = useParams();
    // useParams(); 모든 파라미터가 넘어옴
    console.log(videoId);
  return(
    <>
      <div>VideoDetail </div>
      <div>Video ID : {videoId}</div>
    </>
  );
}