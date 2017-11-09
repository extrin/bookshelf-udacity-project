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
    let newBook = this.state.booksOnShelves.find(x => x.id === book.id);
    let newBooks = [];
    if (newBook == null) {
      newBook = book;
      newBook.shelf = bookShelf;
      newBooks = this.state.booksOnShelves;
      newBooks.push(newBook);
    } else {
      newBooks = this.state.booksOnShelves.map(b => 
        (b.id === book.id ? { ...b, shelf: bookShelf } : b)
      );
    }
    this.setState({ booksOnShelves: newBooks });
    BooksAPI.update(book, bookShelf);
  };

  updateQuery = query => {
    const trimmedQuery = query.trim();
    this.setState({ query: trimmedQuery });
  	this.updateFoundBooks( trimmedQuery );
  }

  clearQuery = () => {
    this.setState({ query: '' });
    this.updateFoundBooks('');
  }

 updateFoundBooks = query => {
   if (query !== '') {
   BooksAPI.search(query, 20).then(tmpBooks => {
      const booksPresent = this.state.booksOnShelves;
      const books = tmpBooks.map(b => {
        let bookPresent = booksPresent.find(bp => bp.id === b.id);
        if (bookPresent == null) {
          b.shelf = 'none'         
        } else {
          b.shelf = bookPresent.shelf;
        }
        return b;
      });
      this.setState({ booksFromSearch: books });
    });
   } else {
     this.setState({ booksFromSearch: [] });
   }
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
