import React, {useRef} from "react";

function Search(stfNthngs){
     const bookInputRef = useRef();
     const link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
     return(
          <div>
               <form >
                    <input ref={bookInputRef} onChange={()=>stfNthngs.onChange(bookInputRef.current.value)}></input>
               </form>
               {stfNthngs.booksArray.map((book, index)=>{
                    return(
                         <div id={index} className="row">
                              <img className="col-2" src={book.image}/>
                              <div className="col-8">
                                   <p>{book.title}</p>
                                   {book.authors.length > 0 ? <p>Author: {book.authors} </p>: <p>Authors: {book.authos}</p>}
                                   {book.link ? <p>Description: {book.description}</p>: <p>{book.description}</p>}
                                   {book.link ? <a link={book.link}>Buy on Google Books</a> : <button href={link}>Click here for more information.</button>}
                              </div>
                         </div>
                    );
               })}
          </div>
     );
}

export default Search;