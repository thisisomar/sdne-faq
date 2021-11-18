import { FAQ_GRID_PAGE_SIZE } from "./constants"
export const getCurrentPageFAQs = (
  faqs = [],
  currentPage = 1,
  pageSize = FAQ_GRID_PAGE_SIZE
) => {
  const end = currentPage * pageSize
  const start = end - pageSize
  return faqs.slice(start, end)
}
