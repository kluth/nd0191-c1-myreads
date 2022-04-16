import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { search } from '../../BooksAPI';
import Book from '../book/Book';



const Search = () => {
    const [query, setQuery] = useState('');
    const [foundBooks, setFoundBooks] = useState([]);
    useEffect(() => {
        if (query) {
            search(query).then(books => setFoundBooks(books));
        } else {
            setFoundBooks([]);
        }
    }, [query, foundBooks.length]);
    
    
  return (
    <section>
        <h2>Search</h2>
        <div className="search-books-bar">
            {/* link back to home */}
            <Link to="/" className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onInput={(event) => setQuery(event.target.value)}/>
            </div>
        </div>
        <div className="search-books-results">
            { foundBooks.length > 0 ? (
            <ol className="books-grid">
                {foundBooks.map(book => (
                    <Book key={book.id} book={book} />
                ))}
            </ol>
            ) : (<h2>No books found</h2>) }
        </div>
    </section>
  )
}

export default Search