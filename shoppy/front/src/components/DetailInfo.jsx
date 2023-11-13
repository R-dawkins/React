export default function DetailInfo(props){
  return(
    <>
      <div className="product_detail_info_title">
        <h2 className="product_detail_info_title_text">{props.name}</h2>
        <p className="product_detail_info_title_price">￦{props.price}</p>
      </div>
      <div className="product_detail_info_discription">
        <p>{props.discription}</p>
      </div>
    </>
  );
}