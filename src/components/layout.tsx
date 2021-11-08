import React, { ReactNode } from "react"

import Seo from "./seo"
import Header from "./header"

interface Props {
  children: ReactNode,
  location: {
    pathname: string
  }
  pageTitle?: string
}

const Layout: React.VFC<Props> = ({ children, location, pageTitle }) => (
  <>
    <Seo
      pageTitle={pageTitle}
    />

    <Header
      location={location}
    />

    {children}

  </>
)

export default Layout