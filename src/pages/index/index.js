import React, { Component } from 'react';
import Top from '../../components/top';
import Bottom from '../../components/bottom';
import ReactMarkdown from 'react-markdown/with-html';
// Update this line to point to your markdown file.
import markdown from "./index.md"

// Rename the component here
class Index extends Component {

  constructor(props) {
    super(props)

    this.state = { markdown: null }
  }

  componentDidMount() {
    // Set the title
    document.title = "Tacos Blaseball :: Homepage"
    // Adjust the subheading, if you want to.
    document.getElementById("banner-subtext").innerText = "72° AND INFINITE";

    // Load markdown contents.
    fetch(markdown)
      .then((response) => response.text())
      .then((text) => {
        this.setState({ markdown: text })
      })
  }

  render() {
    return (
      <div id="main">
        <Top />
        <div id="index">
          <ReactMarkdown source={ this.state.markdown } escapeHtml={ false } ></ReactMarkdown>
        </div>
        <Bottom />
      </div >

    )
  }
}

export default Index
