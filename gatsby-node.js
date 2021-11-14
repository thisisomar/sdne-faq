const path = require("path")
const FAQTemplate = path.resolve("./src/templates/FAQTemplate.js")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // query for all markdown pages
  const allMarkdownPageQueryResult = await graphql(
    `
      query {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `
  )

  // handle errors
  if (allMarkdownPageQueryResult.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.")
    return
  }

  // create a page for each markdown file
  const faqs = allMarkdownPageQueryResult.data.allMarkdownRemark.nodes

  faqs.forEach(faq => {
    const slug = faq.frontmatter.slug

    const pageData = {
      path: `faqs/${slug}`,
      component: FAQTemplate,
      context: {
        slug,
      },
    }

    createPage(pageData)

    // log created page
    reporter.info(`The ${pageData.path} page has been generated successfully`)
  })
}
