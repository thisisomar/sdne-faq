export const getAbsoluteURL = (slug, parentSlug) => {
  let fullURL = window.location.href
  const regex = new RegExp(slug)

  if (!regex.test(window.location.href)) {
    if (parentSlug) {
      return `${fullURL}${parentSlug}/${slug}`
    }

    return `${fullURL}${slug}`
  }

  return fullURL
}
