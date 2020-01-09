import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import projects from "../../content/assets/projects.json"

class Playground extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    const projectList = projects.data.map((project) =>
      <section>
        <h3>{project.title}</h3>
        <p>{project.description} <a href={project.url} target="_blank" rel="noopener noreferrer">Visit site</a></p>
        <a style={{ boxShadow: `none` }} href={project.url} target="_blank" rel="noopener noreferrer">
          <img src={project.screenshot} alt={project.title}/>
        </a>
      </section>
    );

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Playground" />
        <h1>Playground</h1>
        {projectList}
      </Layout>
    )
  }
}

export default Playground

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
