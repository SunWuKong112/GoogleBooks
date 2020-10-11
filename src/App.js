import React, {useState} from 'react';
import logo from './logo.svg';
import Wrapper from "./Components/Wrapper";
import Search from "./Pages/Search";
import Header from "./Components/Header";
import WishList from "./Pages/WishList";
import Error from "./Components/Error";
// import API from "./api";
import './App.css';
import "./Pages/WishList";
import "./Components/Error";

function App() {
  const [books, setBooks] = useState([
    {
      authors: ["Suzanne Collins"],
      description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
      image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
      title: "The Hunger Games"
    }
  ]);
  // function getBooks(e){
  //   e.preventDefault();
  //   // setBooks();
  // }
  // const apiOBJ = API.getBooks();
  // getBooks(apiOBJ);

  const [page, setPage] = useState("Search");
  const Default = [
    {
      authors: [""],
      description: "Enter your search Query Above.",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fartsboston.org%2Fwp-content%2Fuploads%2F2016%2F08%2FOpen-Book.jpg&f=1&nofb=1",
      link: "",
      title: ""
    }
  ];
  function switchPage(e){
    e.preventDefault();
    setPage(e);
  }
  const [searchResults, setSearchResults] = useState(Default);
  const [isLoggedIn, logInOrOut] = useState(false);

  function searchBooks(v){
    if(v === ""){
      const searchResults = Default;
    }
    setSearchResults(books.filter(book=>{
      let query = v;
      query = query.toLocaleLowerCase();
      const title = book.title.toLowerCase();
      let authors;
      book.authors.forEach(auth=>{
        let author = auth.toLowerCase();
        if(author.includes(query)){
          authors = true;
        }
      });
      // const authors = book.authors.first.toLowerCase();
      // const lastName = empL.name.last.toLowerCase();
      if(title.includes(query) || authors == true){
           return true;
      }else{
        return false;
      }
    }));
  }
  function setDefault(){
    if(searchResults == null){
      searchResults = Default;
    }
  }

  return (
    <div className="App">
      <Header className="App-header" loggedIn={isLoggedIn} onClick={(v)=>switchPage(v)}/>
        <Wrapper>
          {page === "Search" ? <Search booksArray={searchResults}onChange={(v)=>{
            searchBooks(v);
            setDefault();
          }}/> : page === "WishList" ? <WishList /> : <Error />}
        </Wrapper>
    </div>
  );
}

export default App;