import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';

import NavMenu from '../common/navigation/NavMenu';

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
    return (
        <Box sx={{ backgroundColor: 'primary.main', py: 1 }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <LocalGroceryStoreRoundedIcon
                        sx={{
                            color: 'secondary.light'
                        }}
                        fontSize="large"
                    />
                    <NavMenu />
                </Box>
            </Container>
        </Box>
    );
};
export default Header;
