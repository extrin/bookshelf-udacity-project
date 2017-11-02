import React from 'react'
import Book from './Book'

function BookShelf (props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((book) => (
            <li key={book.id}>
            <Book
              coverURL={book.previewLink}
              bookShelf={book.shelf}
              bookName={book.title}
              bookAuthors={book.authors}
            />
          ))}
  )
}

export default BookShelf