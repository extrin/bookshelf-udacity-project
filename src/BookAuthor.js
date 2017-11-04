import React from 'react';

function BookAuthor(props) {
  return (
    <div className="book-authors">
      {props.bookAuthors.map(author => <span key={author}>{author}</span>)}
    </div>
  );
}

export default BookAuthor;
