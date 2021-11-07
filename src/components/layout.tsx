import React, { ReactNode } from "react"

import Seo from "./seo"
import Header from "./header"
//import Footer from "./footer"

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

    {/*<Footer />*/}
  </>
)

export default Layout