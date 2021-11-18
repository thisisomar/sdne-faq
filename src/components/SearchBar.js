import React from "react"
import { TextField as MUITextField, Box as MUIBox } from "@mui/material"

export default function SearchBar({ onSearchQueryHandler }) {
  const handleInputChange = event => {
    onSearchQueryHandler(event.target.value)
  }

  return (
    <>
      <MUIBox
        bgcolor={"primary.main"}
        py={3}
        px={4}
        width="100%"
        borderRadius={2}
      >
        <MUITextField
          id="standard-search"
          color="secondary"
          fullWidth
          onChange={handleInputChange}
          label="Search SDNE FAQ"
          type="search"
          variant="outlined"
          InputLabelProps={{ sx: { color: "text.primary" } }}
        />
      </MUIBox>
    </>
  )
}
