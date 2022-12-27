import { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useAxios } from '../../hooks/use-axios';
import { IBook } from '../../ts/books';

import BooksGridItem from './BooksGridItem';
import LoadingSpinner from '../../common/ui/LoadingSpinner';

interface IBooksGridProps {}

/**
 *
 * * LEFT COMMENTED CODE TO BE REVIEWED
 */

const BooksGrid: React.FC<IBooksGridProps> = () => {
    const [cart, setCart] = useState<IBook[]>([]);
    const {
        data: books,
        isLoading,
        error
    } = useAxios<IBook[]>({ url: 'books.json', method: 'GET' }, true);

    const addBookToCart = (book: IBook) => {
        console.log('book', book);
        if (book) {
            setCart((prevCart) => [...prevCart, book]);
        }
    };

    useEffect(() => {
        console.log('cart ITEMS', cart);
    }, [cart]);

    if (isLoading) {
        return <LoadingSpinner asOverlay />;
    } else if (error) {
        return (
            <Box sx={{ py: 3 }}>
                <Typography variant="h2" align="center" gutterBottom>
                    Something went wrong, could not fetch books
                </Typography>
            </Box>
        );
    } else if (!isLoading && !error && books?.length === 0) {
        return (
            <Typography variant="h2" align="center" gutterBottom>
                There are no books to display
            </Typography>
        );
    }

    return (
        <Box sx={{ py: 3 }}>
            <Typography variant="h2" align="center" gutterBottom>
                Books
            </Typography>
            <Grid container spacing={3}>
                {books && books.length > 0
                    ? books.map((book) => (
                          <BooksGridItem
                              key={book.id}
                              book={book}
                              onAddBookToCart={addBookToCart}
                          />
                      ))
                    : null}
            </Grid>
        </Box>
    );
};

export default BooksGrid;
