import React from 'react'

function BookCover (props) {
  render() {
   return(
     <div 
       className="book-cover" 
       style={{ width: 128, height: 193, backgroundImage: {props.coverURL} }}
     ></div>
     )
  }
}