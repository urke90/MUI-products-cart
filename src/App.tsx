import { useEffect, useState } from 'react';

import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import { useAxios } from './hooks/use-axios';
import { IBooks } from './ts/books';

import Header from './Layout/Header';

const App: React.FC = () => {
    const [books, setBooks] = useState<IBooks[]>([]);
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
            <Container maxWidth="lg" sx={{ border: '1px solid red' }}>
                THIS IS CONTAINER FOR REST OF COMPONENTS
            </Container>
        </Box>
    );
};

export default App;
