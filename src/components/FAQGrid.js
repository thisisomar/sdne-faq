import React, { useState, useEffect } from "react"
import { getCurrentPageFAQs } from "../utils/getCurrentPageFAQs"
import { FAQ_GRID_PAGE_SIZE } from "../utils/constants"
import { Grid as MUIGrid, Box as MUIBox } from "@mui/material"
import FAQGridCard from "../components/FAQGridCard.js"
import Pagination from "../components/Pagination"

export default function FAQGrid({ faqs, isPaginated }) {
  const [paginatedFAQS, setPaginatedFAQS] = useState(faqs)
  const [, setCurrentPage] = useState(1)
  const [pageCount] = useState(Math.floor(faqs.length / FAQ_GRID_PAGE_SIZE))

  const handlePageChange = (_, currentPage) => {
    const currentPageFAQs = getCurrentPageFAQs(
      faqs,
      currentPage,
      FAQ_GRID_PAGE_SIZE
    )
    setPaginatedFAQS(currentPageFAQs)
    setCurrentPage(currentPage)
  }

  useEffect(() => {
    // set initial state for paginated faqs
    setPaginatedFAQS(getCurrentPageFAQs(faqs))
  }, [faqs])

  if (faqs.length === 0) {
    return (
      <>
        <MUIBox py={2}>No Results</MUIBox>
      </>
    )
  }

  return (
    <>
      <MUIGrid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        py={2}
        gridAutoRows="1fr"
      >
        {paginatedFAQS.map(({ node }) => (
          <MUIGrid key={node.id} item xs={12} sm={10} md={4}>
            <FAQGridCard faq={node} />
          </MUIGrid>
        ))}
      </MUIGrid>
      {isPaginated && faqs.length > FAQ_GRID_PAGE_SIZE && (
        <Pagination
          pageCount={pageCount}
          onPageChangeHandler={handlePageChange}
        />
      )}
    </>
  )
}
