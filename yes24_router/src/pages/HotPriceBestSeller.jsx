import React from "react";
import BookList from "../components/BookList";
import Book from "../components/Book";
import BookTitle from "../components/BookTitle";
export default function HotPriceBestSeller(){
  return(
    <div className="content">
      <BookTitle
      Ftitle="특가"
      Stitle="베스트"
      color=""
      />
      <BookList>
        <Book
        category="hotpricebest"
        />
      </BookList>
    </div>
  );
}