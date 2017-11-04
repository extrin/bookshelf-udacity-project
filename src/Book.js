import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookCover from './BookCover';
import BookMenu from './BookMenu';
import BookName from './BookName';
import BookAuthor from './BookAuthor';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onBookMove: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <BookCover coverURL={this.props.book.imageLinks.thumbnail} />
          <BookMenu book={this.props.book} onBookMove={this.props.onBookMove} />
        </div>
        <BookName bookName={this.props.book.title} />
        <BookAuthor bookAuthors={this.props.book.authors} />
      </div>
    );
  }
}

export default Book;
