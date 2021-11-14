import React from "react"
import { graphql } from "gatsby"
import DefaultLayout from "../layouts/default"
import FAQPost from "../components/FAQPost"

export default function FAQTemplate({ data }) {
  const faq = data.markdownRemark
  return (
    <DefaultLayout>
      <FAQPost faq={faq} />
    </DefaultLayout>
  )
}

export const FAQTemplateQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        question
      }
    }
  }
`
