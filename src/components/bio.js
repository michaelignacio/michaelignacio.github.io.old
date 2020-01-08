/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import "./styles/bio.scss"

const links = [
  { href: '/', label: 'Posts' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div className="bio">
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: rhythm(1 / 2),
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
        <div className="profile-section">
          <strong><Link to="/" className="link-black">{author}</Link></strong>
          <div className="text-gray description">
            <p>Senior Web Developer for a Brisbane tech startup.</p>
            <p>Remote working advocate.</p>
            <p>Loves cats.</p>
            <nav className="list-type-none">
              {links.map(({ key, href, label }) => (
                <li key={key}>
                  <Link activeStyle={{ textDecoration: `underline` }} to={href}>{label}</Link>
                </li>
              ))}
            </nav>
          </div>
        </div>
    </div>
  )
}

export default Bio
