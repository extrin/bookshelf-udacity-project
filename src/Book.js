import React from 'react'
import BookCover from './BookCover'
import BookMenu from './BookMenu'
import BookName from './BookName'
import BookAuthor from './BookAuthor'

function Book (props) {
  render() {
   return(
   	 <div className="book">
      <div className="book-top">
        <BookCover>
        <BookMenu>
      </div>
      <BookName>
      <BookAuthor>
     </div>
   )
  }
}