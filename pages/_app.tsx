import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import Head from "next/head";
import MyAppBar from "../components/MyAppBar";
import React, { Fragment, useEffect } from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "../lib/materialTheme";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

export const cache = createCache({ key: "css", prepend: true });

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <CacheProvider value={cache}>
        <Head>
          <title>OpenClose Bracket</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <UserProvider>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <MyAppBar />
            <Component {...pageProps} />
          </ThemeProvider>
        </UserProvider>
      </CacheProvider>
    </Fragment>
  );
}

export default MyApp;
