import React from 'react';
import {
  ThemeProvider,
  CssBaseline,
  Box,
  Grid
} from '@material-ui/core';
import { dark } from '../theme';


import Header from '../components/Header';

const Layout = ({ children }) => (
  <>
    <ThemeProvider theme={dark}>
      <CssBaseline/>
      <Header/>
      <Box p={4} maxWidth="sm">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          { children }
        </Grid>
      </Box>
    </ThemeProvider>
  </>
)

export default Layout;