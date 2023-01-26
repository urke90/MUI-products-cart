import { useState, useMemo } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SelectChangeEvent } from '@mui/material/Select';
import { useAxios } from '../../hooks/use-axios';
import { IBook } from '../../ts/books';
import { IAuthor } from '../../ts/authors';

import BooksGridItem from './BooksGridItem';
import SelectCustom from '../../common/form/SelectCustom';
import Header from '../../layout/Header';
import LoadingSpinner from '../../common/ui/LoadingSpinner';

interface IBooksGridProps {}

const BooksGrid: React.FC<IBooksGridProps> = () => {
    const [selectedAuthor, setSelectedAuthor] = useState('all');
    const {
        data: books = [],
        isLoading,
        error
    } = useAxios<IBook[]>({ url: 'books.json', method: 'GET' }, true);
    console.log('books after hook', books);

    const authors: IAuthor[] = useMemo(() => {
        const mappedAuthors = books.map((book) => ({
            id: book.id,
            author: book.author
        }));
        return [...new Map(mappedAuthors.map((a) => [a.author, a])).values()];
    }, [books]);

    const addBookToCart = (book: IBook) => {
        if (book) {
            // setCart((prevCart) => [...prevCart, book]);
        }
    };

    const handleAuthorChange = (event: SelectChangeEvent<unknown>) => {
        setSelectedAuthor(event.target.value as string);
    };

    if (isLoading) {
        return <LoadingSpinner asOverlay />;
    } else if (!isLoading && error) {
        return (
            <Box sx={{ py: 3 }}>
                <Typography variant="h2" align="center" gutterBottom>
                    Something went wrong, could not fetch books
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ py: 3 }}>
            <Header />
            <Typography variant="h2" align="center" gutterBottom>
                Books
            </Typography>
            <Box
                sx={{
                    py: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '20px'
                }}
                className="WRAPPER BOX ELEMENT "
            >
                <Box sx={{ flex: 1 }}>
                    <SelectCustom
                        items={authors}
                        onChange={handleAuthorChange}
                        selectedAuthor={selectedAuthor}
                    />
                </Box>
                <Box sx={{ flex: 1 }}>INPUT SEARCH HERE</Box>
            </Box>
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
