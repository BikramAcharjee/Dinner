import PropTypes from 'prop-types';
import { useMemo } from 'react';
// @mui
import { CssBaseline, Paper as MUIPaper } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';

import palette from './palette';
import shadows from './shadows';
import typography from './typography';
// import GlobalStyles from './globalStyles';
import customShadows from './customShadows';
// import componentsOverride from './overrides';
import { alpha, styled } from '@mui/material/styles';

ThemeProvider.propTypes = {
    children: PropTypes.node,
};

const Paper = styled(MUIPaper)(({theme}) => ({
    height: '100vh',
    // background: 'rgb(24,28,37)',
    // background: 'linear-gradient(0deg, rgba(24,28,37,1) 26%, rgba(255,2,168,1) 100%)',
    background: '#eee',
    borderRadius: 0,
    overflow: 'auto'
}));

export default function ThemeProvider({ children }) {
    const themeOptions = useMemo(
        () => ({
        palette,
        shape: { borderRadius: 6 },
        typography,
        shadows: shadows(),
        customShadows: customShadows(),
        }),
        []
    );

    const theme = createTheme(themeOptions);
    // theme.components = componentsOverride(theme);

    return (
        <StyledEngineProvider injectFirst>
        <MUIThemeProvider theme={theme}>
            <Paper>
                <CssBaseline />
                {/* <GlobalStyles /> */}
                {children}
            </Paper>
        </MUIThemeProvider>
        </StyledEngineProvider>
    );
}
