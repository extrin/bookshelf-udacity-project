import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
  };

  render() {
    const { books, moveBook } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              shelfTitle="Currently Reading"
              books={books.filter(book => book.shelf === 'currentlyReading')}
              onBookMove={moveBook}
            />
            <BookShelf
              shelfTitle="Want to Read"
              books={books.filter(book => book.shelf === 'wantToRead')}
              onBookMove={moveBook}
            />
            <BookShelf
              shelfTitle="Read"
              books={books.filter(book => book.shelf === 'read')}
              onBookMove={moveBook}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
