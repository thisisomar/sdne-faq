import React, { useState } from "react"
import {
  TextField,
  Card,
  CardContent,
  makeStyles,
  createStyles,
} from "@material-ui/core"

import { Grid } from "@material-ui/core"
import FAQCard from "../components/FAQCard.js"

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

export default function SearchBar({ faqs }) {
  const [query, setQuery] = useState("")
  const classes = useStyles()

  const search = event => {
    setQuery(event.target.value)
  }

  return (
    <>
      <Card className={classes.size}>
        <CardContent className={classes.cardContent}>
          <TextField
            id="standard-search"
            color="secondary"
            InputLabelProps={{ className: classes.searchBar }}
            className={classes.root}
            InputProps={{ className: classes.searchBar }}
            fullWidth
            onChange={search}
            label="Search field"
            type="search"
          />
        </CardContent>
      </Card>
      {faqs.map(edge =>
        edge.node.rawMarkdownBody.toLowerCase().includes(query.toLowerCase()) ||
        edge.node.frontmatter.question
          .toLowerCase()
          .includes(query.toLowerCase()) ? (
          <Grid key={edge.node.id} item xs={12}>
            <FAQCard key={edge.node.id} faq={edge.node} />
          </Grid>
        ) : null
      )}
    </>
  )
}
