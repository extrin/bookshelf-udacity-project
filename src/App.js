import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import './App.css';

class BooksApp extends React.Component {
  state = {
    query: '',
    booksOnShelves: [],
    booksFromSearch: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ booksOnShelves: books });
    });
  }

  moveBook = (book, bookShelf) => {
    const newBooks = this.state.booksOnShelves.map(
      b => (b.id === book.id ? { ...b, shelf: bookShelf } : b)
    );
    this.setState(state => ({ booksOnShelves: newBooks }));
    BooksAPI.update(book, bookShelf);
  };

  updateQuery = query => {
    const trimmedQuery = query.trim();
    this.setState({ query: trimmedQuery });
    BooksAPI.search(trimmedQuery, 20).then(tmpBooks => {
      const booksGot = this.state.booksOnShelves;
      const books = tmpBooks.map(b => ({
        booksGot.filter(bk => {bk.id === b.id})
      } ? {
        ...b,
        shelf: book.shelf
      } : 'none'));

      this.setState({ booksFromSearch: books });
    });
  };

  clearQuery() {
    this.setState({ query: '' });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Route
            exact
            path="/"
            render={() => (
              <ListBooks
                books={this.state.booksOnShelves}
                moveBook={this.moveBook}
              />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <SearchBooks
                books={this.state.booksFromSearch}
                moveBook={this.moveBook}
                updateQuery={this.updateQuery}
                query={this.state.query}
                clearQuery={this.clearQuery}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default BooksApp;
