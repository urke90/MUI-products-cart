import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { IBook } from '../../ts/books';

interface IBooksGridItemProps {
    book: IBook;
}

const BooksGridItem: React.FC<IBooksGridItemProps> = ({ book }) => {
    return (
        <Grid item xs={12} sm={6} lg={3}>
            <Card elevation={2} sx={{ p: 2 }}>
                <Typography variant="body1">this is card text</Typography>
            </Card>
        </Grid>
    );
};
export default BooksGridItem;
