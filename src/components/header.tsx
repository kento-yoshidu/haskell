import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
  >
    <div
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
