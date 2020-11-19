import React from 'react';
import Layout from '../components/Layout';
import FAQCard from '../components/FAQCard'
import { Grid } from '@material-ui/core';
import { graphql } from 'gatsby';

const FAQTemplate = ({data: {faq}}) => {
  return(
    <Layout>
      <Grid item xs={8}>
        <FAQCard faq={faq} />
      </Grid>
    </Layout>
  )
}

export default FAQTemplate;

export const faqQuery = graphql`
  query FAQBySlug($slug: String!) {
    faq: markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        question
      }
      fields {
        slug
      }
    }
  }
`
