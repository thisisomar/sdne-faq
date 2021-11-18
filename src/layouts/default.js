import React from "react"
import { CssBaseline, Box as MUIBox } from "@mui/material"
import { ThemeProvider, createStyles } from "@mui/material/styles"
import { makeStyles } from "@mui/styles"
import { dark } from "../theme"

import Header from "../components/Header"

const useStyles = makeStyles(_ =>
  createStyles({
    main: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  })
)

export default function Layout({ children }) {
  const classes = useStyles()

  return (
    <>
      <ThemeProvider theme={dark}>
        <CssBaseline />
        <Header />
        <MUIBox px={3} py={5} className={classes.main}>
          {children}
        </MUIBox>
      </ThemeProvider>
    </>
  )
}
