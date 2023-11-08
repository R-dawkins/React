import React from "react";
import BookList from "../components/BookList";
import Book from "../components/Book";
import BookTitle from "../components/BookTitle";
export default function SteadySeller(){
  return(
    <div className="content">
      <BookTitle
      Ftitle="국내도서"
      Stitle="스테디셀러"
      color="title_blue"
      />
      <BookList>
        <Book
        category="steady"
        />
      </BookList>
    </div>
  );
}