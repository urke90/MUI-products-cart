import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';

import NavMenu from '../common/navigation/NavMenu';

import { IAuthor } from '../ts/authors';

interface IHeaderProps {
    authors?: IAuthor[];
    onAuthorChange?: (evt: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Header: React.FC<IHeaderProps> = () => {
    return (
        <Box sx={{ backgroundColor: 'primary.main', py: 1 }}>
            <Container
                maxWidth="lg"
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
                <Stack spacing={2} direction="row" alignItems="center">
                    <NavMenu />
                </Stack>
            </Container>
        </Box>
    );
};
export default Header;
