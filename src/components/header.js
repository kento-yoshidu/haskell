import React from "react"
import { Link } from "gatsby"

/*
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false
*/

const Header = ({ headerTitle,
                  pageTitle,
                  currentPage,
                  postCount,
                  pageCount,
                  isTopPage,
                  isArticle
                }) => {

  let h1,
      countInfo;

  if (isTopPage) {
    h1 = (
      <h1 className="header-title">{ headerTitle }</h1>
    )
  } else {
    h1 = (
      <h1 className="header-title">
        <Link to="/page/1/">{ headerTitle }</Link>
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