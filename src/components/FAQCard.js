import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Divider,
  makeStyles
} from '@material-ui/core';


const useStyles = makeStyles({
  title: {
    padding: '6px',
  },
  size: {
    width: '1000px',
    maxWidth: '100%',
  },
})

export default function({ faq }) {
  const classes = useStyles();

  return(
    <Card className={classes.size}>
      <CardContent>
        <Typography className={classes.title} variant="h3">
          { faq.frontmatter.question }
        </Typography>
        <Divider/>
        <Typography color="textPrimary" component="div" dangerouslySetInnerHTML={{ __html: faq.html }}>
        </Typography>
      </CardContent>
    </Card>
  )
}