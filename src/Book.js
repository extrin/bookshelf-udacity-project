import React from 'react';
import BookCover from './BookCover';
import BookMenu from './BookMenu';
import BookName from './BookName';
import BookAuthor from './BookAuthor';

function Book(props) {
  return (
    <div className="book">
      <div className="book-top">
        <BookCover coverURL={props.coverURL} />
        <BookMenu bookShelf={props.bookShelf} />
      </div>
      <BookName bookName={props.bookName} />
      <BookAuthor bookAuthors={props.bookAuthors} />
    </div>
  );
}

export default Book;
