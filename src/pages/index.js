import React, { useState } from "react"
import { graphql } from "gatsby"
import { filterFAQS } from "../utils/filterFAQS"
import DefaultLayout from "../layouts/default"
import SearchBar from "../components/SearchBar"
import FAQGrid from "../components/FAQGrid"

export default function Home({ data }) {
  const { edges } = data.allMarkdownRemark
  const [faqs] = useState(edges)
  const [filteredFAQS, setFilteredFAQs] = useState(faqs)
  const [, setSearchQuery] = useState("")

  const handleSearchQueryUpdate = term => {
    setFilteredFAQs(filterFAQS(faqs, term))
    setSearchQuery(term)
  }

  return (
    <DefaultLayout>
      <SearchBar onSearchQueryHandler={handleSearchQueryUpdate} />
      <FAQGrid faqs={filteredFAQS} isPaginated={true} />
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___question, order: DESC }
      filter: { frontmatter: { question: { ne: null } } }
    ) {
      edges {
        node {
          id
          html
          rawMarkdownBody
          excerpt(format: HTML, pruneLength: 75)
          frontmatter {
            slug
            question
          }
        }
      }
    }
  }
`
