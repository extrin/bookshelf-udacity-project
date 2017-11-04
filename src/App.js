import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import './App.css';

class BooksApp extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" render={() => <ListBooks />} />
          <Route path="/search" render={() => <SearchBooks />} />
        </div>
      </Router>
    );
  }
}

export default BooksApp;
