import { Box } from '@mui/material';
import Container from '@mui/material/Container';

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
    return (
        <Box sx={{ backgroundColor: 'primary.main', py: 3 }}>
            <Container maxWidth="lg">THIS IS HEADER</Container>
        </Box>
    );
};
export default Header;
