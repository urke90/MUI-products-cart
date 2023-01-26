import Box from '@mui/system/Box';
import Container from '@mui/material/Container';

import BooksGrid from './components/books/BooksGrid';

const App: React.FC = () => {
    return (
        <Box>
            {/* <Header /> */}
            <Container maxWidth="lg">
                <Box>
                    <BooksGrid />
                </Box>
            </Container>
        </Box>
    );
};

export default App;
