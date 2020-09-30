import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Top from '../../components/top';
import Bottom from '../../components/bottom';
import ReactMarkdown from 'react-markdown/with-html';
import markdown from "./seasonate.md"

class seasonATE extends Component {

  constructor(props) {
    super(props)

    this.state = { markdown: null }
  }

  componentDidMount() {
    // Set the title
    document.title = "Tacos Blaseball :: seasonATE"
    // Adjust the subheading
    document.getElementById("banner-subtext").innerText = "SSHHHH... WE'RE SLEEPY NOW";

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
        <div id="seasonATE">
          <ReactMarkdown source={ this.state.markdown } escapeHtml={ false } ></ReactMarkdown>
        </div>
        <Link to="/snackrifice" class="nav_link">
          <h3 class="yellow">Go to the #SNACKRIFICE page</h3>
        </Link>
        <Bottom />
      </div >

    )
  }
}

export default seasonATE
