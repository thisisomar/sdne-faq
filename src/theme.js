import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


const darkMuiTheme = createMuiTheme({
  type: 'dark',
  palette: {
    primary: {
      main: '#1f1b29'
    },
    background: {
      default: '#1f1b29'
    }
  }
})

export const dark = responsiveFontSizes(darkMuiTheme);