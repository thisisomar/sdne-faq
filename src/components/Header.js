import React from "react"
import { Link } from "gatsby"
import { AppBar as MUIAppBar, Typography as MUITypography } from "@mui/material"

export default function Header() {
  return (
    <MUIAppBar position="static" bgcolor={"primary.main"}>
      <MUITypography
        textAlign="center"
        variant="h4"
        component={Link}
        pt={2}
        py={2}
        href={"/"}
        sx={{
          color: "secondary.main",
          ":visited": "secondary.main",
          textDecoration: "none",
        }}
      >
        Software Development & Network Engineering
      </MUITypography>
    </MUIAppBar>
  )
}
