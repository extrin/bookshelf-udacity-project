import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookMenu extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onBookMove: PropTypes.func.isRequired
  };

  render() {
    const book = this.props.book;
    return (
      <div className="book-shelf-changer">
        <select
          defaultValue={book.shelf || 'none'}
          onChange={event => this.props.onBookMove(book, event.target.value)}
        >
          <option value="moveTo" disabled>
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
