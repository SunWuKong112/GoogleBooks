import React, {useState} from 'react';
import Wrapper from "./Components/Wrapper";
import Search from "./Pages/Search";
import Header from "./Components/Header";
import WishList from "./Pages/WishList";
import Error from "./Components/Error";
// import API from "./api";
import './App.css';
import "./Pages/WishList";
import "./Components/Error";

// https://books.google.com/ebooks?id=buc0AAAAMAAJ&dq=holmes&as_brr=4&source=webstore_bookcard
// https://www.googleapis.com/auth/books

function App() {
  const [page, setPage] = useState("Search");
  const [isLoggedIn, logInOrOut] = useState(false);

  function switchPage(e){
    setPage(e);
  }

  return (
    <div className="App">
      <Header className="App-header" loggedIn={isLoggedIn} page={page} logInOrOut={(v)=>{
        logInOrOut(v);
      }} switchPage={(v)=>switchPage(v)}/>
        <Wrapper>
          {page === "Search" ? <Search loggedIn={isLoggedIn}/> : page === "WishList" ? <WishList loggedIn={isLoggedIn} /> : <Error />}
        </Wrapper>
    </div>
  );
}

export default App;