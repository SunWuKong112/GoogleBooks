import axios from 'axios';

export function getBooks(searchTerms, callBack){
     const APIKey = "AIzaSyC-iRcbkMPJub-KTMjbXVhiB69sLvwB06o";
     // return axios.get(`https://books.google.com/ebooks?id=buc0AAAAMAAJ&dq=holmes&as_brr=4&source=webstore_bookcard&key=${yourAPIKey}`);
     try{
          axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}&key=${APIKey}&maxResults=40`).then((res)=>{
               // console.log(res.data.items);
               callBack(res);
          });
     }catch(e){
          return e;
     }
}