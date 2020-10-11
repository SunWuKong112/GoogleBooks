import React from "react";

function Header(stfnthngs){
     return(
          <div>
               {stfnthngs.loggedIn === true ? <button href="WishList" onClick={(e)=>stfnthngs.onclick("WishList")}>Wish List</button> : <button href="LogIn" onClick={(e)=>stfnthngs.onclick("LogIn")}>Log in</button>}
               {stfnthngs.page ===  "Search" ? <button href="Search" onClick={(e)=>stfnthngs.onclick("Search")}>Search</button> : <button href="" onClick={(e)=>stfnthngs.onclick("")}></button>}
          </div>
     );
}

export default Header;