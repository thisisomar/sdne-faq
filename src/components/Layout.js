import React from 'react';
import {
  ThemeProvider,
  CssBaseline
} from '@material-ui/core';
import { dark } from '../theme';

import Header from '../components/Header';

const Layout = ({ children }) => (
  <>
    <ThemeProvider theme={dark}>
      <CssBaseline/>
      <Header/>
      { children }
    </ThemeProvider>
  </>
)

export default Layout;