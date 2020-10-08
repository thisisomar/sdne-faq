import React from "react";
import Layout from "../components/Layout";
import { Box, Grid } from "@material-ui/core";
import FAQCard from "../components/FAQCard.js";

const Home = () => {
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
            <Grid item xs={8}>
              <FAQCard/>
            </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

export default Home;
