export default function DetailImg({pid}){
  return(
    <div className="product_detail_img_wrap">
          <img className="product_detail_img" src={`/images/${pid}.webp`}/>
    </div>
  );
}