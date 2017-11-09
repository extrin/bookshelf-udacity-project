import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    query: PropTypes.string.isRequired,
    moveBook: PropTypes.func.isRequired,
    updateQuery: PropTypes.func.isRequired,
    clearQuery: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="search-books">
        <SearchBar
          query={this.props.query}
          updateQuery={this.props.updateQuery}
          clearQuery={this.props.clearQuery}
        />
        <div className="search-books-results">
          <BookShelf
            shelfTitle="Search Results"
            books={this.props.books}
            onBookMove={this.props.moveBook}
          />
        </div>
      </div>
    );
  }
}

export default SearchBooks;
