import React from 'react'

function BookCover (props) {

   return(
     <div 
       className="book-cover" 
       style={{ 
          width: 128, 
          height: 193, 
          backgroundImage: `url(${props.coverURL})`
	 }}/>
     )

}

export default BookCover