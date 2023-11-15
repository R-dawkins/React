import { Link } from "react-router-dom";

export default function HomeVisualContents ({imgNum}){
  const page = parseInt(imgNum)+1;
  return(
    <Link to={`/products/${page}`}><img src={`/images/${imgNum}.webp`}/></Link> //images와 link 오차
  );
}