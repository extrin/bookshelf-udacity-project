import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';

class BookMenu extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  };

  state = {
    book: this.props.book
  };

  changeShelf = shelf => {
    this.setState(state => {
      state.book.shelf = shelf;
    });

    BooksAPI.update(this.state.book, shelf);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          defaultValue={this.state.book.shelf}
          onChange={event => this.changeShelf(event.target.value)}
        >
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookMenu;
