import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Header = ({ pageTitle,
                  isTopPage,
                }) => {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  let h1

  if (isTopPage) {
    h1 = (
      <h1 className="header-title">{ site.siteMetadata.title }</h1>
    )
  } else {
    h1 = (
      <h1 className="header-title">
        <Link to="/page/1/">{ site.siteMetadata.title }</Link>
      </h1>
    )
  }

  return (
    <header className="header">
      { h1 }

      <h2 className="page-title">
        { pageTitle }
      </h2>
    </header>
  )
}

export default Header