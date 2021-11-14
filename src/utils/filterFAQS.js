export const filterFAQS = (faqs, filterTerm) => {
  return faqs.filter(({ node: faq }) => {
    let searchRegex = new RegExp(filterTerm, "gim")

    const isInFAQQuestion = searchRegex.test(faq.frontmatter.question)
    const isInFAQBody = searchRegex.test(faq.rawMarkdownBody)

    return isInFAQQuestion || isInFAQBody
  })
}
