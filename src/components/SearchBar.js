import React from "react"
import { TextField as MUITextField } from "@mui/material"

export default function SearchBar({ onSearchQueryHandler }) {
  const handleInputChange = event => {
    onSearchQueryHandler(event.target.value)
  }

  return (
    <>
      <MUITextField
        id="standard-search"
        color="secondary"
        fullWidth
        onChange={handleInputChange}
        label="Search SDNE FAQ"
        type="search"
        variant="outlined"
      />
    </>
  )
}
