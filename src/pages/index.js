import React from "react"
import Layout from "../components/Layout"
import { Grid } from "@material-ui/core"
import FAQCard from "../components/FAQCard.js"
import { graphql } from "gatsby"

import Search from "../utils/Search"

const Home = () => {
  return (
    <Layout>
      <Search />
    </Layout>
  )
}

export default Home
