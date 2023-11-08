import Bookimg from "./Bookimg";
import Bookcontents from "./Bookcontents";
import Bookbuy from "./Bookbuy";
import { useEffect, useState } from "react";
export default function Book({category}){
  const [book,setBook] = useState([]);
  useEffect(()=>{
    fetch(`/data/${category}_book.json`) //파일들의 이름에 일정한 패턴을 줘서 데이터를 넘길 때 데이터파일 이름 전체가 아니라 일부만 넘겨서 보안성을 높인다.
    .then(res=>res.json())
    .then(data=>setBook(data))
  },[]);
  return(
        <>
          {book.map(book=>
          <div className="book_container">
            <Bookimg
            img={book.img}/>
            <Bookcontents
            title={book.title}
            sub_title={book.sub_title}
            author={book.author}
            publisher={book.publisher}
            relese_date={book.relese_date}
            price={book.price}
            />
            <Bookbuy/>
          </div>
          )}
        </>
  );
}