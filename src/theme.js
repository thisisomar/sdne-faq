import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


const darkMuiTheme = createMuiTheme({
  type: 'dark',
  palette: {
    primary: {
      dark: '#16131d',
      main: '#1f1b29'
    },
    background: {
      default: '#1f1b29'
    },
    typography: {

      primary: {
        
        fontFamily: [
            'Poppins',
            'Roboto',
            'sans-serif'
          ].join(','),
        },
  
      },
  }
})

export const dark = responsiveFontSizes(darkMuiTheme);