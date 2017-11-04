import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {
  state = {
    books: [],
    query: ''
  };

  updateQuery = query => {
    const trimmedQuery = query.trim();
    this.setState({ query: trimmedQuery });
    BooksAPI.search(trimmedQuery, 20).then(books => {
      this.setState({ books });
    });
  };

  clearQuery = query => {
    this.setState({ query: '' });
  };

  moveBook = (book, bookShelf) => {
    const newBooks = this.state.books.map(
      b => (b.id === book.id ? { ...b, shelf: bookShelf } : b)
    );
    this.setState(state => ({ books: newBooks }));
    BooksAPI.update(book, bookShelf);
  };

  render() {
    return (
      <div className="search-books">
        <SearchBar query={this.state.query} updateQuery={this.updateQuery} />
        <div className="search-books-results">
          <BookShelf
            shelfTitle="Search Results"
            books={this.state.books}
            onBookMove={this.moveBook}
          />
        </div>
      </div>
    );
  }
}

export default SearchBooks;
