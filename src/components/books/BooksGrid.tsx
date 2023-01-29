// import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SelectChangeEvent } from '@mui/material/Select';

import { getBooks } from '../../api/books';
import { IBook } from '../../ts/books';
// import { IAuthor } from '../../ts/authors';

import BooksGridItem from './BooksGridItem';
// import SelectCustom from '../../common/form/SelectCustom';
import Header from '../../layout/Header';
import LoadingSpinner from '../../common/ui/LoadingSpinner';

interface IBooksGridProps {}

const BooksGrid: React.FC<IBooksGridProps> = () => {
    // const [selectedAuthor, setSelectedAuthor] = useState('all');
    const booksQuery = useQuery<IBook[], Error>({
        queryKey: ['books'],
        queryFn: getBooks
    });

    if (booksQuery.isLoading) {
        return <LoadingSpinner asOverlay />;
    }
    if (booksQuery.isError) {
        return (
            <Box sx={{ py: 3 }}>
                <Typography variant="h2" align="center" gutterBottom>
                    {booksQuery.error.message}
                </Typography>
            </Box>
        );
    }

    const books = booksQuery.data;
    // console.log('books', books);
    // console.log('data', data);

    // const authors: IAuthor[] = useMemo(() => {
    //     const mappedAuthors = books.map((book) => ({
    //         id: book.id,
    //         author: book.authorz
    //     }));
    //     return [...new Map(mappedAuthors.map((a) => [a.author, a])).values()];
    // }, [books]);

    const addBookToCart = (book: IBook) => {
        if (book) {
            // setCart((prevCart) => [...prevCart, book]);
        }
    };

    // const handleAuthorChange = (event: SelectChangeEvent<unknown>) => {
    //     setSelectedAuthor(event.target.value as string);
    // };

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
                    {/* <SelectCustom
                        items={authors}
                        onChange={handleAuthorChange}
                        selectedAuthor={selectedAuthor}
                    /> */}
                </Box>
                <Box sx={{ flex: 1 }}>INPUT SEARCH HERE</Box>
            </Box>
            <Grid container spacing={3}>
                {books
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
