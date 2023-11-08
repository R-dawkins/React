import React from "react";
import BookList from "../components/BookList";
import Book from "../components/Book";
import BookTitle from "../components/BookTitle";
export default function DayBestSeller(){
  return(
    <div className="content">
      <BookTitle
      Ftitle="국내도서"
      Stitle="일별 베스트"
      color="title_blue"
      />
      <BookList>
        <Book
        category="daybest"
        />
      </BookList>
    </div>
  );
}