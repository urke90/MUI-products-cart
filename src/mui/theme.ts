import { createTheme } from '@mui/material/styles';
import { deepPurple, green, deepOrange } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: deepPurple[500]
        },
        secondary: {
            main: green[500]
        },
        third: {
            main: deepOrange[500],
            secondary: deepOrange[300]
        }
    }
});

declare module '@mui/material/styles' {
    interface Palette {
        third: {
            main: typeof deepOrange[500];
            secondary: typeof deepOrange[300];
        };
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        third: {
            main: typeof deepOrange[500];
            secondary: typeof deepOrange[300];
        };
    }
}
