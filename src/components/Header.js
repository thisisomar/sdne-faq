import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  createStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles ({
  root: {
    flexGrow: 1,
    color: '#FF4365',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,

    [theme.breakpoints.down('xl')]: {
      fontSize: '3em',
      textAlign: 'center'
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '2.7em'
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '2.1em'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.6em'
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: '1.4em',
        textAlign: 'left'
    }

  },
  appBar: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: theme.palette.primary.dark,

    [theme.breakpoints.down('xl')]: {
      padding: '20px 0px'
    },
    [theme.breakpoints.down('md')]: {
      padding: '12px 0px'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '9px 0px'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '7px 15px'
    }
  },
  toolBar: {
    padding: 0
  }
}));

export default function Header() {
  const classes = useStyles();

  return(
    <AppBar position='static' className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Typography className={classes.root} variant='h3'>
          Software Development & Network Engineering
        </Typography>
      </Toolbar>
    </AppBar>
  )
}