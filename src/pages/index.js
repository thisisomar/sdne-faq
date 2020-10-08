import React from 'react';
import Layout from '../components/Layout';
import { Box, Grid } from '@material-ui/core';
import FAQCard from '../components/FAQCard.js';
import { graphql } from 'gatsby';

const Home = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const FAQs = edges
    .filter(edge => !!edge.node.frontmatter.question)
    .map(edge => <Grid item xs={8}><FAQCard faq={edge.node}/></Grid>)
  return (
    <Layout>
      <Box p={4} maxWidth="sm">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          {FAQs}
        </Grid>
      </Box>
    </Layout>
  )
}

export default Home;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___question] }) {
      edges {
        node {
          id
          html
          frontmatter {
            slug
            question
          }
        }
      }
    }
  }
`
