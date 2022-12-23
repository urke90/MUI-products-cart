import { useEffect, useState } from 'react';

import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import { useAxios } from './hooks/use-axios';
import { IBook } from './ts/books';

import Header from './Layout/Header';
import BooksGrid from './components/books/BooksGrid';

const App: React.FC = () => {
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
        <Box>
            <Header />
            <Container maxWidth="lg">
                <Box>
                    {books.length > 0 ? <BooksGrid books={books} /> : null}
                </Box>
            </Container>
        </Box>
    );
};

export default App;
