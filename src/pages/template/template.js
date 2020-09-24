import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Top from '../../components/top';
import Bottom from '../../components/bottom';
import ReactMarkdown from 'react-markdown/with-html';
// Update this line to point to your markdown file.
import markdown from "./template.md"

// Rename the component here
class Template extends Component {

  constructor(props) {
    super(props)

    this.state = { markdown: null }
  }

  componentDidMount() {
    // Set the title
    document.title = "Tacos Blaseball :: template"
    // Adjust the subheading, if you want to.
    document.getElementById("banner-subtext").innerText = "Hi Taco, I'm a Template";

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
        <div id="template">
          <ReactMarkdown source={ this.state.markdown } escapeHtml={ false } ></ReactMarkdown>
        </div>
        <Bottom />
      </div >

    )
  }
}

export default Template
