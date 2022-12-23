import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

interface ILoadingSpinnerProps {
    asOverlay?: boolean;
}

const LoadingSpinner: React.FC<ILoadingSpinnerProps> = ({ asOverlay }) => {
    // asOverlay ===> center spinner with black opacity
    const style = {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: asOverlay ? 'absolute' : 'static',
        top: asOverlay ? '50%' : 0,
        left: asOverlay ? '50%' : 0,
        transform: asOverlay ? 'translate(-50%, -50%)' : 'none',
        color: 'primary.main',
        bgcolor: asOverlay ? 'rgba(0, 0, 0, 1)' : '#ffffff'
    };

    return (
        <Box sx={style}>
            <CircularProgress color="inherit" />
        </Box>
    );
};
export default LoadingSpinner;
