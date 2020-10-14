import React, {useRef, useState} from "react";
import {getBooks} from "../utils/googleBooksApi";
import {saveBook} from "../utils/api";

function Search(){
     const bookInputRef = useRef();
     const link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

       // function getBooks(e){
  //   e.preventDefault();
  //   // setBooks();
  // }
  // const apiOBJ = API.getBooks();
  // getBooks(apiOBJ);



     const Default = [
          {
               authors: [],
               description: "Enter your search Query Above.",
               image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fartsboston.org%2Fwp-content%2Fuploads%2F2016%2F08%2FOpen-Book.jpg&f=1&nofb=1",
               link: "",
               title: "",
               id:""
      
               // authors: ["Suzanne Collins"],
               // description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
               // image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
               // ,link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
               // title: "The Hunger Games"
          }
     ];
  
     const [searchResults, setSearchResults] = useState(Default);

     function searchBooks(v){
          switch(v.length){
               case"":
                    setDefault();
                    break;
               default:
                    getBooks(v, (res)=>{
                    let bookStore = res.data.items;
                    var bookTemp = [];
                    for(let i = 0; i < bookStore.length; i++){
                         let image;
                         if(bookStore[i].volumeInfo.imageLinks){
                              image = bookStore[i].volumeInfo.imageLinks.thumbnail;
                         } else {
                              image = Default.image;
                         }
                         var description;
                         if(bookStore[i].volumeInfo.description){
                              description = bookStore[i].volumeInfo.description;
                         } else {
                              description = "";
                         }
                         const link = bookStore[i].volumeInfo.previewLink;
                         const googleBooksID = bookStore[i].id;
                         bookTemp.push({
                              title:bookStore[i].volumeInfo.title,
                              authors:bookStore[i].volumeInfo.authors,
                              image:image,
                              description:description,
                              link:link,
                              googleBooksID:googleBooksID
                         });
                    }
                    setSearchResults(bookTemp);
               });
          }
     }

     function setDefault(){
          setSearchResults(Default);
          console.log("Defaulted");
     }

     return(
          <div>
               <form >
                    <input ref={bookInputRef} onChange={()=>{
                              searchBooks(bookInputRef.current.value);
                         }} />
               </form>
               {searchResults.map((book, index)=>{
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
                                             console.log(book);
                                             saveBook(book);
                                        }}id={book.id}>Add to favorites</button>
                                   </div>
                              </div>
                         </div>
                    );
               })}
          </div>
     );
}

export default Search;