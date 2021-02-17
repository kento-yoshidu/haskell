import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Header = ({ pageTitle,
                  currentPage,
                  postCount,
                  pageCount,
                  isTopPage,
                  isArticle
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

  console.log(site)

  let h1,
      countInfo;

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

  if(!isArticle) {
    countInfo = (
      <div className="countInfo">
        <p className="page"><span>{postCount}</span> 件の記事</p>
        <p className="page"><span>{pageCount}</span> ページ中 / <span>{currentPage}</span> ページ目</p>
      </div>
    )
  }

  return (
    <header className="header">
      { h1 }

      <h2 className="page-title">
        { pageTitle }
      </h2>
      { countInfo }
    </header>
  )
  }

export default Header