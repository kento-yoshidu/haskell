import React from "react"
import { Link } from "gatsby"

import * as Styles from "../styles/header.module.scss"

interface Props {
  location: {
    pathname: string
  }
}

const Header: React.VFC<Props> = ({ location }) => (
  <header className={Styles.header}>
    <h1 className={Styles.headerTitle}>CSS Animation & Tips</h1>

    {
      location.pathname !== "/" && (
        <Link
          to="/"
          className={Styles.link}
        >
          HOME
        </Link>
      )
    }
  </header>
)

export default Header