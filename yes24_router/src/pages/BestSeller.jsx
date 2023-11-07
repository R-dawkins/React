import React, { useEffect, useState } from "react";
import Book from "../components/Book";
import BookList from "../components/BookList";
export default function BestSeller(){
  return(
    <div className="content">
      <BookList>
            <Book/>
      </BookList>
    </div>
  );
}