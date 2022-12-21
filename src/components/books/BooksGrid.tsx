import React from 'react';
import { IBook } from '../../ts/books';

interface IBooksGridProps {
    books: IBook[];
}

const BooksGrid: React.FC<IBooksGridProps> = ({ books }) => {
    console.log('books in booksGrid', books);

    return <div>THIS WILL BE GRID COMPONENT TO RENDER BOOKS</div>;
};
export default BooksGrid;
