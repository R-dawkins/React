import React from "react";
import BookList from "../components/BookList";
import Book from "../components/Book";
import BookTitle from "../components/BookTitle";
export default function MonthWeekBestSeller(){
  return(
    <div className="content">
      <BookTitle
      Ftitle="국내도서"
      Stitle="월별 베스트"
      color="title_blue"
      toggle={true}
      />
      <BookList>
        <Book
        category="monthweekbest"
        />
      </BookList>
    </div>
  );
}