export const getAbsoluteURL = (slug, parentSlug) => {
  let fullURL = window.location.href
  const regex = new RegExp(slug)

  if (!regex.test(window.location.href)) {
    if (parentSlug) {
      fullURL = `${fullURL}${parentSlug}/${slug}`
    } else {
      fullURL = `${fullURL}${slug}`
    }
  }

  return fullURL
}
