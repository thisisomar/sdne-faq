import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: '3em',
    color: '#FF4365'
  }
})

export default function Header() {
  const classes = useStyles();

  return(
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.root} variant="h3">
          Software Development & Network Engineering
        </Typography>
      </Toolbar>
    </AppBar>
  )
}