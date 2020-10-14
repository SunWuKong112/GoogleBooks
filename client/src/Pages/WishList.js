import React, {useEffect, useState} from "react";
import {getWishList, deleteBook} from "../utils/api";

function WishList(stfNthngs){
     const [WishList, editLocalWish] = useState([]);
     const link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
     useEffect(() => {
          getWishList().then(res=>{
               editLocalWish(res.data);
               console.log(res);
               console.log(WishList);
          });
     }, [])
     return(
          <div>
               {WishList.map((book, index)=>{
                    return(
                         <div key={index} className="row">
                              <img className="col-2" src={book.image} alt=""/>
                              <div className="col-8">
                                   <p>{book.title}</p>
                                   {book.authors === null || book.authors === "" ? <p></p> : <p>Author(s): {book.authors} </p>}
                                   {book.link ? <p>Description: {book.description}</p>: <p>{book.description}</p>}
                                   {book.link ? <a href={book.link}>Buy on Google Books</a> : <a href={link}>Click here for more information.</a>}
                                   <div className="row">
                                        <button className="col-12" onClick={()=>{
                                             deleteBook(book);
                                        }}id={book.id}>Remove from favorites</button>
                                   </div>
                              </div>
                         </div>
                    );
               })}
               <p>{JSON.stringify(WishList)}</p>
          </div>
     );
}

export default WishList;