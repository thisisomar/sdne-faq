import React from "react"
import { Typography as MUITypography } from "@mui/material"

export default function FAQPost({ faq }) {
  return (
    <>
      <MUITypography color="textPrimary" variant="h2">
        {faq.frontmatter.question}
      </MUITypography>
      <MUITypography
        dangerouslySetInnerHTML={{ __html: faq.html }}
      />
    </>
  )
}
