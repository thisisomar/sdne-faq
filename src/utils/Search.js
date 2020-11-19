import React, { Component } from "react"
import SearchBar from "../components/SearchBar"
import { Grid } from "@material-ui/core"
import FAQCard from "../components/FAQCard.js"

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
      <>
        <SearchBar onChange={this.search}/>
        {this.state.results.map(faq => (
          <Grid key={faq.id} item xs={12}>
            <FAQCard key={faq.id} faq={faq} />
          </Grid>
        ))}
      </>
    )
  }

  getSearchResults(query) {
    if (!query || !window.__LUNR__) return []
    const lunrIndex = window.__LUNR__['en']
    const results = lunrIndex.index.search(query) // you can  customize your search , see https://lunrjs.com/guides/searching.html
    return results.map(({ ref }) => lunrIndex.store[ref])
  }

  search = event => {
    const query = event.target.value
    const results = this.getSearchResults(query)
    this.setState(s => {
      return {
        results,
        query,
      }
    })
  }
}
