import { Button,  Grid,  makeStyles,  Toolbar, Typography, AppBar } from "@material-ui/core";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0";

const useStyles = makeStyles({
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // border: 0,
    // borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // color: 'white',
    // height: 48,
    // padding: '0 30px',
  },
  button : {
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  }
});




const MyAppBar = () => {
    const classes = useStyles();
    const {user} = useUser();

    function LoginButton() {
   
    return (
        <a  href="/api/auth/login"><Button>Login</Button></a>

    )
}

function LogoutButton() {
    return (
        <a  href="/api/auth/logout"><Button color="inherit">Logout</Button></a>
    )
}
  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
       <Grid container spacing={5}>
         <Grid item xs={11}>
          <Typography variant="h6">
          OpenClose Bracket
          </Typography>
          </Grid>
             <Grid item xs>
          {user ? <LogoutButton /> : <LoginButton/>}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;




