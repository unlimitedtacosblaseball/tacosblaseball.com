import React, { Component } from 'react';
import Top from '../../components/top';
import Bottom from '../../components/bottom';
import ReactMarkdown from 'react-markdown/with-html';
// Update this line to point to your markdown file.
import markdown from "./lost.md"

// Rename the component here
class Lost extends Component {

  constructor(props) {
    super(props)

    this.state = { markdown: null }
  }

  componentDidMount() {
    // Set the title
    document.title = "Tacos Blaseball :: Lost"
    // Adjust the subheading, if you want to.
    document.getElementById("banner-subtext").innerText = "MISSING TACOS FEEL BAD MAN"

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
        { /* Adjust this div if you want to have custom styles. */ }
        <div id="lost">
          <ReactMarkdown source={ this.state.markdown } escapeHtml={ false } ></ReactMarkdown>
        </div>
        <Bottom />
      </div >
    )
  }
}

export default Lost;

