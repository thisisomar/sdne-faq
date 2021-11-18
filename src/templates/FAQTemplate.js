import React from "react"
import { graphql } from "gatsby"
import DefaultLayout from "../layouts/default"
import FAQCard from "../components/FAQCard"

export default function FAQTemplate({ data }) {
  const faq = data.markdownRemark
  return (
    <DefaultLayout>
      <FAQCard faq={faq} showFullFAQ={true} />
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
