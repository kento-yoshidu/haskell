import * as React from "react"
import type { ReactChild } from "react"
import { Link } from "gatsby"

interface Props {
  children: ReactChild
}

const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <div className="global-wrapper">
      <main>{children}</main>
    </div>
  )
}

export default Layout
