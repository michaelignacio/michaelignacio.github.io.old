import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Projects extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <h1>About me</h1>
        <p>
          I'm Michael Ignacio, a web developer. I love to design websites and create web apps using latest technologies. I love working remotely and I love cats - in fact, I have four c h o n k s at home.
          </p>
        <p>I've been doing web development for five years now and I enjoy working with technologies like React, React Native, Vue, and Wordpress.</p>
        <h3>Things I've done</h3>
        <p>You can see my work on my <a href="http://github.com/michaelignacio" rel="noopener noreferrer" target="_blank">Github page</a>.</p>
        <h3>Contact Me</h3>
        <p>You can contact me on <a href="https://www.linkedin.com/in/mjrignacio/" rel="noopener noreferrer" target="_blank">LinkedIn</a>.</p>

      </Layout>
    )
  }
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
