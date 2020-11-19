import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

import SearchBar from "../components/SearchBar"

const Home = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const faqs = edges.filter(edge => !!edge.node.frontmatter.question)
  return (
    <Layout>
      <SearchBar faqs={faqs} />
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___question] }) {
      edges {
        node {
          id
          html
          rawMarkdownBody
          frontmatter {
            slug
            question
          }
        }
      }
    }
  }
`
