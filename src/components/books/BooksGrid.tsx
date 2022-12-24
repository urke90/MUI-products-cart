import { useEffect, useState, useMemo } from 'react';

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
    // const [books, setBooks] = useState<IBook[]>([]);
    const {
        data: books,
        isLoading,
        error
    } = useAxios<IBook[]>({ url: 'books.json', method: 'GET' }, true);

    // console.log('books', books);

    // useMemo(() => {
    //     console.log('opalio useMemo');
    //     const fetchBooks = async () => {
    //         const response = await sendRequest({
    //             url: 'books.json',
    //             method: 'GET'
    //         });

    //         if (response?.status === 200 && response.data.length > 0) {
    //             const modifiedBooks: IBook[] = response.data.reduce(
    //                 (acc: IBook[], nextBook: IBook, index: number) => {
    //                     const updatedBook = {
    //                         ...nextBook,
    //                         id: index + 1
    //                     };

    //                     return [...acc, updatedBook];
    //                 },
    //                 []
    //             );

    //             setBooks(modifiedBooks);
    //         }
    //     };
    //     fetchBooks();
    // }, []);

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
                              key={book.link + book.imageLink}
                              book={book}
                          />
                      ))
                    : null}
            </Grid>
        </Box>
    );
};
export default BooksGrid;

/**
 * const Component = () => {
   useMemo(() => {
     // componentWillMount events
   },[]);
   useEffect(() => {
     // componentDidMount events
     return () => {
       // componentWillUnmount events
     }
   }, []);
};


You would need to keep the useMemo hook before anything that interacts with your state. This is not how it is intended but it worked for me for all componentWillMount issues.

This works because useMemo doesnt require to actually return a value and you dont have to actually use it as anything, but since it memorizes a value based on dependencies which will only run once ("[]") and its on top of our component it runs once when the component mounts before anything else.
 */
