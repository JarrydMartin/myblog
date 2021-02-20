import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1b1b1b',
    },
    secondary: {
      main: '#fafafa',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#212121',
    },
    text:{
        primary:"#fafafa",
    }
  },
});

export default theme;
