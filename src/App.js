import { useState } from "react";
import "./App.css"
import Home from "./HomePage";
import Books from "./BooksPage"
import AddNewBook from "./AddNewBook";
import AuthorList from "./AuthorList";
import AddNewAuthor from "./AddNewAuthor";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [page, setPage] = useState("home");

  function home() {
    setPage("home")
  }

  function books() {
    setPage("books")
  }

  function addnewbook() {
    setPage("addnewbook")
  }

  function authorlist() {
    setPage("authorlist")
  }

  function addnewauthor() {
    setPage("addnewauthor")
  }

  function login() {
    setPage("login")
  }

  function register() {
    setPage("register")
  }

  let displayPage;

  if (page === "home") {
    displayPage = <Home></Home>;
  }

  else if (page === "books") {
    displayPage = <Books></Books>
  }

  else if (page === "addnewbook") {
    displayPage = <AddNewBook></AddNewBook>
  }

  else if (page === "authorlist") {
    displayPage = <AuthorList></AuthorList>
  }

  else if (page === "addnewauthor") {
    displayPage = <AddNewAuthor></AddNewAuthor>
  }

  else if (page === "login") {
    displayPage = <Login></Login>
  }

  else if (page === "register") {
    displayPage = <Register></Register>
  }

  return (
    <div className="app-main-container">
      <h2 style={{color:"green",fontWeight:"bold",textAlign:"center"}}>Make book as your best friends.</h2>

      <div className="navbar-container">
        <button onClick={home}>Home</button>
        <button onClick={books}>Books</button>
        <button onClick={addnewbook}>Add new book</button>
        <button onClick={authorlist}>Author list</button>
        <button onClick={addnewauthor}>Add new author</button>
        <button style={{color:"white",background:"blue",borderRadius:"10px"}} onClick={login}>Login</button>
        <button style={{color:"white",background:"blue",borderRadius:"10px"}}  onClick={register}>Register</button>
      </div>

      {displayPage}

    </div>

  )
}
export default App;


