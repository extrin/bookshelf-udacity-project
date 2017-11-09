import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  static propTypes = {
    query: PropTypes.string,
    updateQuery: PropTypes.func.isRequired,
    clearQuery: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={this.props.query}
            onChange={event => this.props.updateQuery(event.target.value)}
          />
          <button onClick={() => this.props.clearQuery} className="clear-query">
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
