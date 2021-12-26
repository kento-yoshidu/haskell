import * as React from "react"
import type { ReactChild } from "react"
import { Link } from "gatsby"

import Header from "../components/header"
interface Props {
  children: ReactChild;
  location: {
    pathname: string
  }
}

const Layout: React.VFC<Props> = ({ children, location }) => {
  console.log(location)
  return (
    <div className="global-wrapper">
      <Header
        location={location}
      />
      <main>{children}</main>
    </div>
  )
}

export default Layout
