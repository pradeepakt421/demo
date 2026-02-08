import { useState } from "react";
import { books } from "./BookJSON";
import "./BooksPage.css";

function Books() {

    let [chooseBook, setChooseBook] = useState(null);

    const bookCards = [];

    for (let i = 0; i < books.length; i++) {
        bookCards.push(

            <div className="book-card" key={books[i].title}>
                <img src={books[i].image} alt={books[i].title} className="book-image" onClick={() => setChooseBook(books[i])} />
                <h3 className="book-title">{books[i].title}</h3>
            </div>

        );
    }

    let bookDetails;

    if (chooseBook) {
        bookDetails = (
            <div className="book-details-container">
                <h1>Book Details</h1>

                <div className="book-details">

                    <div className="image">
                        <img src={chooseBook.image} alt={chooseBook.title} className="details-image"/>
                    </div>

                    <div className="details">
                        <p><strong>Title:</strong> {chooseBook.title}</p>
                        <p><strong>Author:</strong> {chooseBook.author}</p>
                        <p><strong>Price:</strong> {chooseBook.price}</p>
                        <p><strong>Rating:</strong> {chooseBook.rating}</p>
                        <p><strong>Description:</strong> {chooseBook.description}</p>
                    </div>

                </div>
            </div>
        );
    } 
    else
    {
        bookDetails = null;
    }

    return (
        <div>
            <div className="books-page-container">
                {bookCards}
            </div>

            {bookDetails}
        </div>
    );
}

export default Books;


//-------------------------------------------------------------------------
// import { useState } from "react";
// import { books } from "./BookArrya";
// import "./BooksPage.css";

// function Books() {
//   const [selectedBook, setSelectedBook] = useState(null);

//   return (
//     <div>
//       <div className="books-container">
//         {
//           books.map((book) => {
//             return (

//               <div className="book-card" key={book.title}>
//                 <img src={book.image} alt={book.title} className="book-image" onClick={() => setSelectedBook(book)}/> 
//                 <h3 className="book-title">{book.title}</h3>
//               </div>

//             );
//           })
//         }
//       </div>

//       {/* book details */}
//       {selectedBook && (
//         <div>

//           <h1>Book Details</h1>

//           <div className="book-details">

//             <div className="image">
//               <img src={selectedBook.image} alt={selectedBook.title} className="details-image"/>
//             </div>

//             <div className="deatils">
//               <p><strong>Title:</strong> {selectedBook.title}</p>
//               <p><strong>Author:</strong> {selectedBook.author}</p>
//               <p><strong>Price:</strong> {selectedBook.price}</p>
//               <p><strong>Rating:</strong> {selectedBook.rating}</p>
//               <p><strong>Description:</strong> {selectedBook.description}</p>
//             </div>

//           </div>
          
//         </div>
//       )}
//     </div>
//   );
// }
// export default Books;
