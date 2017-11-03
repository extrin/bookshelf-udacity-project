import React from 'react'
import SearchBar from './SearchBar'
import BookShelf from './BookShelf'

function SearchBooks (props) {
 return (
   <div className="search-books">
   	 <SearchBar/>
   	 <div className="search-books-results">
     	<BookShelf
           shelfTitle="Search Results"
           books={props.books.filter(
           book => book.shelf === 'none'
         )}
        />
     </div>
   </div>
   );
}

export default SearchBooks;