export const navigatorShare = async data => {
  try {
    await navigator.share(data)
  } catch (error) {
    console.error(error)
  }
}
