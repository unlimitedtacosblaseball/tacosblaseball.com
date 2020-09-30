import React, { Component } from 'react';
import Top from '../../components/top';
import Bottom from '../../components/bottom';
import ReactMarkdown from 'react-markdown/with-html';
import markdown from "./snackrifice.md"

class Snackrifice extends Component {

  constructor(props) {
    super(props)

    this.state = { markdown: null }
  }

  componentDidMount() {
    // Set the title
    document.title = "Tacos Blaseball :: Snackrifice";
    // Adjust the subheading
    document.getElementById("banner-subtext").innerText = "WE SHELLED OUR OWN PITCHERS";

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
        <div id="snackrifice">
          <ReactMarkdown source={ this.state.markdown } escapeHtml={ false } ></ReactMarkdown>
        </div >
        <Bottom />
      </div>
    )
  }
}

export default Snackrifice
