export const copyToClipboard = text => {
  if (window) {
    const clipboard = window.navigator.clipboard
    clipboard.writeText(text)
  }
}
