import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks'
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    return (
    <Router>
      <div className="app">     
         <Route exact path="/" render={() => (
          	<ListBooks books={this.state.books}/>
         )}/>
         <Route path="/search" render={() => (
            <SearchBooks books={this.state.books}/>
         )}/>	   
      </div>
</Router>
    );
  }
}

export default BooksApp;
