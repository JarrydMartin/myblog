import { Button, makeStyles, Toolbar, AppBar } from "@material-ui/core";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { useShadowGlowStyle } from "../lib/themeConstants";

const MyAppBar = () => {
  const classes = useStyles();
  const shadowGlowStyle = useShadowGlowStyle();
  const { user } = useUser();

  function LoginButton() {
    return (
      <a href="/api/auth/login">
        <Button>Login</Button>
      </a>
    );
  }

  function LogoutButton() {
    return (
      <a href="/api/auth/logout">
        <Button color="inherit">Logout</Button>
      </a>
    );
  }

  return (
    <AppBar position="static">
      <Toolbar className={`${shadowGlowStyle.shadowGlow} ${classes.container}`}>
          <h1 className={classes.title}>OpenClose Bracket</h1>
          <div className={classes.authButton}>
            {user ? <LogoutButton /> : <LoginButton />}
        </div>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  title: {
    gridColumn: "1/2",
  },
  authButton: {
    gridColumn: "3/4",
    justifySelf: "end",
  },
});

export default MyAppBar;
