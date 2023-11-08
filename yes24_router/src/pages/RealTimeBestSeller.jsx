import React from "react";
import BookList from "../components/BookList";
import Book from "../components/Book";
import BookTitle from "../components/BookTitle";
export default function RealTimeBestSeller(){
  return(
    <div className="content">
      <BookTitle
      Ftitle="실시간"
      Stitle="베스트"
      color=""
      />
      <BookList>
      <Book
      category="realtimebest"
      />
      </BookList>
    </div>
  );
}