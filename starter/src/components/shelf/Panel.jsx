import React from 'react'
import Book from '../book/Book';

/**
 * A component that displays a shelf of books.
 * @param title - The title of the shelf.
 * @param books - The books to display.
 * @param setBooks - A function that updates the books in the shelf.
 * @returns A shelf of books.
 */
const Panel = ({title, books}) => {
    // camelCase the title
    const titleCamelCase = title.split(' ')[0].toLowerCase() + title.split(' ').slice(1).join('');
    return (
        <section className={`${titleCamelCase} shelf`}>
            <h2 className='bookshelf-title'>{title}</h2>
            {/* display all books in a list */}
            <ul className='bookshelf-books books-grid'>
                {books.map(book => (
                    <Book key={book.id} book={book} />
                ))}
            </ul>
        </section>
    );
}

export default Panel