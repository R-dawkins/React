export default function Bookcontents(props){
  return(
    <div className="book_wrap">
        <div><p className="book_title">{props.title}<span className="sub_title">{props.sub_title}</span></p></div>
        <div className="book_info_wrap">
          <div className="book_info"><p className="book_info_content">{props.author}<span className="span_gray">저</span></p></div>
          <span className="span_bar"></span>
          <div className="book_info"><p className="book_info_content">{props.publisher}</p></div>
          <span className="span_bar"></span>
          <div className="book_info"><p className="book_info_content gray">{props.relese_date}</p></div>
        </div>
        <p className="book_price">{props.price}<span className="price_unit">원</span></p>
      </div>
  );
}