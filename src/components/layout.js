import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"

import "./styles/layout.scss"

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div className="layout">
        <header className="header"  >
          { location.pathname === rootPath ||
            location.pathname === '/about' ||
            location.pathname === '/projects'
           ? '' : 
            <p className="mb-1">
            <Link to="/" className="view-all" >
              View all posts
            </Link></p> }
          { (location.pathname === rootPath ||
             location.pathname === '/about' ||
             location.pathname === '/projects' ) && <Bio /> }
        </header>
        <div>
          <main className="main">{children}</main>
        </div>
      </div>
    )
  }
}

export default Layout
