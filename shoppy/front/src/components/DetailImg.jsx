export default function DetailImg({image}){
  return(
    <div className="product_detail_img_wrap">
          <img className="product_detail_img" src={`http://localhost:8000/${image}`}/>
    </div>
  );
}