import React from "react";

function Error(stfnthngs){
     return(
          <div>
               <h1>An error has occured</h1>
               <button className="" href="Contact" onClick={(e)=>stfnthngs.onClick("Search")}>Return to home page</button>
          </div>
     );
}

export default Error;