import React from "react"
import { Link } from "gatsby"
import { AppBar as MUIAppBar, Typography as MUITypography } from "@mui/material"

export default function Header() {
  return (
    <MUIAppBar position="static">
      <MUITypography textAlign="center" variant="h4" pt={2} py={2}>
        <Link to="/">
          Software Development & Network Engineering
        </Link>
      </MUITypography>
    </MUIAppBar>
  )
}
