import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import MyAppBar from "../components/MyAppBar";
import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import { CssBaseline } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary:{
      main: '#263238'
    },
    secondary:{
      main: '#FE6B8B0'
    },
     background: {
      default: "#4f5b62"
    },
    text:{
      primary:'#fbe9e7'
    }
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
       <ThemeProvider theme={theme}>
         <CssBaseline />
        <MyAppBar />
        <Component {...pageProps} />
        </ThemeProvider>
    </UserProvider>
  );
}

export default MyApp;
