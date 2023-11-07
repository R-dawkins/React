import Bookimg from "./Bookimg";
import Bookcontents from "./Bookcontents";
import Bookbuy from "./Bookbuy";
import { useEffect, useState } from "react";
export default function Book(){
  const [book,setBook] = useState([]);
  useEffect(()=>{
    fetch('/data/best_book.json')
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