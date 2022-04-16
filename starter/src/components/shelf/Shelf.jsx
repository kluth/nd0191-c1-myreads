import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { getAll } from '../../BooksAPI'
import Panel from './Panel';


/**
 * The main component for the application.
 * @returns None
 */
const Shelf = () => {
    /**
     * Gets all the books from the database and sets them as the state.
     * @returns None
     */
    const [ books, setBooks ] = useState([]);

/**
 * Gets all the books from the database and sets them to the state.
 * @returns None
 */
function getAllBooks() {
    getAll().then(books => setBooks(books));
}
/**
 * Gets all the books from the database and sets them to the state. 
 * @returns None
 */
useEffect(() => {
    getAllBooks();
}, [books]);

    
    /**
     * This function is used to create a list of books that are currently being read, wanted to read and read.
     * @param books - the list of books that are currently being read, wanted to red and read.
     * @returns None
     */
    const [ currentlyReading, setCurrentlyReading ] = useState([]);
    const [ wantToRead, setWantToRead ] = useState([]);
    const [ read, setRead ] = useState([]);
    useEffect(() => {
        setCurrentlyReading([]);
        setWantToRead([]);
        setRead([]);
        // remove all books with book.shelf = 'none'
        books.filter(book => book.shelf !== 'none').forEach(book => {
            if (book.shelf === 'currentlyReading') {
                setCurrentlyReading(currentlyReading => [...currentlyReading, book]);
            } else if (book.shelf === 'wantToRead') {
                setWantToRead(wantToRead => [...wantToRead, book]);
            } else if (book.shelf === 'read') {
                setRead(read => [...read, book]);
            } else if (book.shelf === 'none') {
                return;
            }
        });
    }, [books]);
  /**
   * The main component of the app.
   * @returns The main component of the app.
   */
  return (
    <main onChange={getAllBooks} className="bookshelf">
        <Panel title="Currently Reading" books={currentlyReading} />
        <Panel title="Want to Read" books={wantToRead} />
        <Panel title="Read" books={read} />
        {/* link to search */}
        <Link to="/search" className='open-search'>Search</Link>
    </main>
  )
}

export default Shelf