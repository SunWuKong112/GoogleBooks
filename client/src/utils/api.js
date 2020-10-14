import axios from "axios";

// Gets all books
export function getWishList(){
    return axios.get("/api/books/WishList");
}
// Deletes the book with the given id
export function deleteBook(id){
    return axios.delete(`/api/books/${id}`);
}
// Saves a book to the database
export function saveBook(bookData){
    return axios.post(`/api/books/add-book`, bookData);
}