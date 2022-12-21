import { Box } from '@mui/system';
import Container from '@mui/material/Container';

import Header from './Layout/Header';

const App: React.FC = () => {
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
