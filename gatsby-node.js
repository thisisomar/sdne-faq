const path = require('path')
const faqTemplate = path.resolve("./src/templates/faqTemplate.js")


exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            faqs: allMarkdownRemark {
              nodes {
                fields {
                  slug
                }
              }
            }
          }
        `
      ).then((result) => {
        const faqs = result.data.faqs.nodes
        faqs.forEach((faq) => {
          createPage({
            path: faq.fields.slug,
            component: faqTemplate,
            context: {
              slug: faq.fields.slug,
            },
          })
        })
      })
    )
  })
}