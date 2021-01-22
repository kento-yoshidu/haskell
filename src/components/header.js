import React from "react"
import { Link } from "gatsby"

const Header = ({ headerTitle, pageTitle, isTopPage }) => {

  let h1;

  if (isTopPage) {
    h1 = (
      <h1 className="header-title">{ headerTitle }</h1>
    )
  } else {
    h1 = (
      <h1 className="header-title">
        <Link to="/">{ headerTitle }</Link>
      </h1>
    )
  }

  return (
    <header className="header">
      { h1 }
      <h2 className="page-title">{ pageTitle }</h2>
    </header>
  )
}

export default Header