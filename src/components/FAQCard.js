import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Divider,
  makeStyles,
  IconButton
} from "@material-ui/core";

import { LinkIcon } from "@material-ui/icons/Link";

const useStyles = makeStyles({
  title: {
    padding: '6px',
  },
  size: {
    width: '1000px',
    maxWidth: '100%',
  },
  p: {
    fontSize: 20,
  }
})

export default function() {
  const classes = useStyles();

  return(
    <Card className={classes.size}>
      <CardContent>
        <Typography className={classes.title} variant="h3">
          This is a test question.
        </Typography>
        <Divider/>
        <Typography variant="body1" color="textPrimary" component="p">
          This is test content
        </Typography>
      </CardContent>
    </Card>
  )
}