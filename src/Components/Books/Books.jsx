import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books,setBooks] = useState([])
    useEffect(() =>{
        fetch('../../../public/data/booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    return (
        <div className="my-5">
             <h2 className="text-center text-4xl font-bold my-12">Books</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center lg:w-[85%] mx-auto">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
             </div>
        </div>
    );
};

export default Books;