import React from "react";
import Book from "../components/Book";
import BookList from "../components/BookList";
import BookTitle from "../components/BookTitle";
export default function BestSeller(){
  return(
    <div className="content">
      <BookTitle
      Ftitle="국내도서"
      Stitle="종합 베스트"
      color="title_blue"
      />
      <BookList>
        <Book
        category="best"
        />
      </BookList>
    </div>
  );
}