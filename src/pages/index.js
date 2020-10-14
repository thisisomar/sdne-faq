import React from 'react';
import Layout from '../components/Layout';
import { Grid } from '@material-ui/core';
import FAQCard from '../components/FAQCard.js';
import { graphql } from 'gatsby';

const Home = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const FAQs = edges
    .filter(edge => !!edge.node.frontmatter.question)
    .map(edge => <Grid key={edge.node.id} item xs={12}><FAQCard key={edge.node.id} faq={edge.node}/></Grid>)
  return (
    <Layout>
      {FAQs}
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
