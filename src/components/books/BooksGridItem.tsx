import bookImg from '../../assets/img/book.jpeg';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';

import { IBook } from '../../ts/books';

interface IBooksGridItemProps {
    book: IBook;
    onAddBookToCart: (data: IBook) => void;
}

const BooksGridItem: React.FC<IBooksGridItemProps> = ({
    book,
    onAddBookToCart
}) => {
    const {
        author,
        title,
        link,
        year,
        pages,
        id,
        country,
        language,
        imageLink
    } = book;

    // console.log('book', book);

    const handleAddToCart = () => {
        const data: IBook = {
            id,
            author,
            country,
            title,
            link,
            year,
            pages,
            imageLink,
            language
        };

        onAddBookToCart(data);
    };

    const authorName =
        author === 'Unknown' ? "Couldn't find authors name" : author;

    return (
        <Grid item xs={12} sm={6} lg={3}>
            <Card elevation={2} sx={{ p: 2 }}>
                <Typography gutterBottom variant="h5" align="center" noWrap>
                    Author: {authorName}
                </Typography>
                <Link href={link}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={bookImg}
                        alt="default book img"
                    />
                </Link>
                <CardContent>
                    <Typography gutterBottom variant="h6" noWrap>
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Beatae fuga dolorem inventore ullam, iste
                        architecto esse iure aspernatur harum officiis.
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Pages: {pages} Year: {year}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        size="small"
                        startIcon={<LocalGroceryStoreRoundedIcon />}
                        onClick={handleAddToCart}
                    >
                        Add To Cart
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};
export default BooksGridItem;
