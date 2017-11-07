import React from 'react';

function BookAuthor(props) {
  return (
    <div className="book-authors">
      {props.bookAuthors &&
        props.bookAuthors.map(author => (
          <span key={author}>
            {author}
            <br />
          </span>
        ))}
    </div>
  );
}

export default BookAuthor;
