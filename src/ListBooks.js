import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

function ListBooks (props) {
  return (
  	<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div> 
    			<BookShelf
                  shelfTitle="Currently Reading"
                  books={props.books.filter(
                    book => book.shelf === 'currentlyReading'
                  )}
                />
                <BookShelf
                  shelfTitle="Want to Read"
                  books={props.books.filter(
                    book => book.shelf === 'wantToRead'
                  )}
                />
                <BookShelf
                  shelfTitle="Read"
                  books={props.books.filter(
                    book => book.shelf === 'read'
                  )}
                />
              </div>
            </div>
            <Link to="/search" className="open-search">
            	Add a book
            </Link>
          </div>
  );
}

export default ListBooks;