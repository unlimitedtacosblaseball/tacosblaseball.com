import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Top from '../../components/top';
import Bottom from '../../components/bottom';
import ReactMarkdown from 'react-markdown/with-html';
import markdown from "./resources.md"

class Resources extends Component {

  constructor(props) {
    super(props)

    this.state = { markdown: null }
  }

  componentDidMount() {
    // Set the title
    document.title = "Tacos Blaseball :: resources"
    // Adjust the subheading
    document.getElementById("banner-subtext").innerText = "Sharing is caring";

    // Load markdown contents.
    fetch(markdown)
      .then((response) => response.text())
      .then((text) => {
        this.setState({ markdown: text })
      })
  }

  render() {
    return (
      <div className="main">
        <Top />
        <div id="resources">
          <ReactMarkdown source={ this.state.markdown } escapeHtml={ false } ></ReactMarkdown>
        </div>
        <Bottom />
      </div>

    )
  }
}

export default Resources
