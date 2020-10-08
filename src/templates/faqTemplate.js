import React from 'react';
import Layout from '../components/Layout';
import FAQCard from '../components/FAQCard'
import {Box, Grid} from '@material-ui/core';
import { graphql } from 'gatsby';

const FAQTemplate = ({data: {faq}}) => {
  console.log(faq);
  return(
    <Layout>
      <Box p={4} maxWidth="sm">
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={4}
          >
              <Grid item xs={8}>
                <FAQCard faq={faq} />
              </Grid>
          </Grid>
      </Box>
    </Layout>
  )
}

export default FAQTemplate;

export const faqQuery = graphql`
  query FAQBySlug($slug: String!) {
    faq: markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        slug
        question
      }
    }
  }
`
