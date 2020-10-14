import React from "react";

function Header(stfnthngs){
     return(
          <div>
               {stfnthngs.page === "Search" ? <button href="WishList" onClick={(e)=>stfnthngs.switchPage("WishList")}>Wish List</button> : <button href="Search" onClick={(e)=>stfnthngs.switchPage("Search")}>Search</button>}
               {stfnthngs.loggedIn === false ? <button href="logIn" onClick={()=>stfnthngs.logInOrOut(true)}>log in</button> : <button href="" onClick={(e)=>stfnthngs.logInOrOut(false)}>Log out</button>}
          </div>
     );
}

export default Header;