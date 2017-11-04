import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class ListBooks extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  moveBook = (book, bookShelf) => {
    const newBooks = this.state.books.map(
      b => (b.id === book.id ? { ...b, shelf: bookShelf } : b)
    );
    this.setState(state => ({ books: newBooks }));
    BooksAPI.update(book, bookShelf);
  };

  render() {
    const books = this.state.books;

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
              onBookMove={this.moveBook}
            />
            <BookShelf
              shelfTitle="Want to Read"
              books={books.filter(book => book.shelf === 'wantToRead')}
              onBookMove={this.moveBook}
            />
            <BookShelf
              shelfTitle="Read"
              books={books.filter(book => book.shelf === 'read')}
              onBookMove={this.moveBook}
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
