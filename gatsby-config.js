/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `faqs`,
        path: `${__dirname}/src/faqs`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-slug`,
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Poppins`,
                variants: [`700`],
              },
              {
                family: `Roboto`,
                variants: [`400`, `300`]
              }
            ]
          }
        }
      }
    }
  ],
}
