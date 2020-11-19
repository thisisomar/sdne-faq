import React from "react"
import {
  TextField,
  Card,
  CardContent,
  makeStyles,
  createStyles,
} from "@material-ui/core"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
    searchBar: {
      fontFamily: "Poppins, sans-serif",
      color: "#ffffff",
    },
    size: {
      width: "100%",
      backgroundColor: theme.palette.primary.dark,

      [theme.breakpoints.down("xl")]: {
        maxWidth: 1200,
        padding: "25px 35px",
      },
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {
        maxWidth: "100%",
        padding: "20px",
      },
    },
    cardContent: {
      padding: 0,

      "&:last-child": {
        padding: 0,
      },
    },
  })
)

export default function SearchBar({ onChange }) {
  const classes = useStyles()

  return (
    <Card className={classes.size}>
      <CardContent className={classes.cardContent}>
        <TextField
          id="standard-search"
          color="secondary"
          className={classes.root}
          InputProps={{ className: classes.searchBar }}
          fullWidth
          onChange={onChange}
          label="Search field"
          type="search"
        />
      </CardContent>
    </Card>
  )
}
