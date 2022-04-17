import React from 'react'
import { update } from '../../BooksAPI';

/**
 * A component that represents a book.  It is used to display a book in the list of books.
 * @param book - The book to display.
 * @param setBooks - A function that sets the books in the state.
 * @returns A component that represents a book.
 */
const Book = ({book}) => {
  return (
    <li>
        <div className={`book ${book.shelf === 'none' ? 'noneShelf' : ''}`}>
            <div className="book-top">
                { book.imageLinks ? (
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail}` }}></div>
                ) : (
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(https://via.placeholder.com/128x193?text=No%20Cover)` }}></div>
                )}
                <div className="book-shelf-changer">
                    <select defaultValue={`${book.shelf}`} onChange={(event) => {
                        // remove book from current shelf and add to the selected shelf
                        update(book, event.target.value);
                    }}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            {book.authors ? (
            <div className="book-authors">{book.authors}</div>
            ) : (
            <div className="book-authors">Unknown</div>
            )}
        </div>
    </li>
  );
}

export default Book