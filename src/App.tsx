import { Box } from '@mui/system';
import { useTheme } from '@mui/system';

const App: React.FC = () => {
    const theme = useTheme();

    console.log('theme', theme);

    return <Box color={theme.palette.third.secondary}>THE CODE GOES HERE</Box>;
};

export default App;
