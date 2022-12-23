import { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useAxios } from '../../hooks/use-axios';
import { IBook } from '../../ts/books';

import BooksGridItem from './BooksGridItem';

interface IBooksGridProps {}

const BooksGrid: React.FC<IBooksGridProps> = () => {
    const [books, setBooks] = useState<IBook[]>([]);
    const { sendRequest } = useAxios();

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await sendRequest({
                url: 'books.json',
                method: 'GET'
            });

            if (response?.status === 200 && response.data.length > 0) {
                setBooks(response.data);
            }

            console.log('response', response);
        };
        fetchBooks();
    }, [sendRequest]);

    console.log('books fetched', books);
    return (
        <Box sx={{ py: 3 }}>
            <Typography variant="h2" align="center" gutterBottom>
                Books
            </Typography>
            <Grid container spacing={3}>
                <BooksGridItem />
                <BooksGridItem />
                <BooksGridItem />
                <BooksGridItem />
                <BooksGridItem />
                <BooksGridItem />
            </Grid>
        </Box>
    );
};
export default BooksGrid;
