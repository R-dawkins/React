import { Link } from "react-router-dom";

export default function HomeVisualContents ({imgNum}){
  return(
    <Link to={`/products/${imgNum}`}><img src={`/images/${imgNum}.webp`}/></Link>
  );
}