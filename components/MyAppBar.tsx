import {
  Button,
  makeStyles,
  Toolbar,
  Typography,
  AppBar,
} from "@material-ui/core";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0";

const MyAppBar = () => {
  const classes = useStyles();
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
      <Toolbar className={classes.root}>
        <Typography className={classes.title} variant="h6">
          OpenClose Bracket
        </Typography>
        <div className={classes.authButton}>
          {user ? <LogoutButton /> : <LoginButton />}
        </div>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "200px auto 200px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  title: {
    gridColumn: "1/2",
  },
  authButton: {
    gridColumn: "3/4",
    justifySelf: "end",
  },
  button: {
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
});

export default MyAppBar;
