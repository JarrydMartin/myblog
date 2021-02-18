import { AppBar, Button, createStyles, Grid, IconButton, makeStyles, Theme, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import { useUser } from "@auth0/nextjs-auth0";


function LoginButton() {
    return (
        <a  href="/api/auth/login"><Button color="inherit">Login</Button></a>

    )
}

function LogoutButton() {
    return (
        <a  href="/api/auth/logout"><Button color="inherit">Logout</Button></a>
    )
}


const MyAppBar = () => {
    
    const {user} = useUser()
  return (
    <AppBar position="static">
      <Toolbar>
       <Grid container spacing={5}>
         <Grid item xs={11}>
        <Typography variant="h6">
          Open Close Bracket
        </Typography>
        </Grid>
             <Grid item xs={"auto"}>
          {user ? <LogoutButton /> : <LoginButton/>}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;




