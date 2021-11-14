import React from "react"
import MUIPagination from "@mui/material/Pagination"

export default function Pagination({ onPageChangeHandler, pageCount }) {
  return (
    <>
      <MUIPagination count={pageCount} onChange={onPageChangeHandler} />
    </>
  )
}
