export default function Bookimg(props){
  return(
    <div className="img_wrap">
    <img src={props.img}/>
    <button>미리보기</button>
  </div>
  );
}