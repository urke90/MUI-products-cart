import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import BooksGridItem from './BooksGridItem';

import { IBook } from '../../ts/books';

interface IBooksGridProps {
    books: IBook[];
}

const BooksGrid: React.FC<IBooksGridProps> = ({ books }) => {
    console.log('books in booksGrid', books);

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
