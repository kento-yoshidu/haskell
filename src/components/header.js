import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faClock, faUndo, faTags } from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Header = ({ headerTitle,
                  pageTitle,
                  isTopPage,
                  postdate,
                  updatedate,
                  categorySlug,
                  categoryName,
                  tags,
                  isArticle,
                }) => {

  let h1,
      tag;

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

  if(isArticle) {
    tag = (
      tags.map(tag => {
        return (
          <Link to={`/tag/${tag}`}>
            { tag }
          </Link>
        )
      })
    )

  return (
    <header className="header">
      { h1 }
      <h2 className="page-title">{ pageTitle }</h2>
      <div className="info">
        <p>
          <FontAwesomeIcon icon={faClock} />{ postdate }
        </p>
        <p>
          <FontAwesomeIcon icon={faUndo} />{ updatedate }
        </p>
        <p>
          <Link to={`/category/${ categorySlug }`}>
            { categoryName }
          </Link>
        </p>
        <p>
          <FontAwesomeIcon icon={faTags} />
          { tag }
        </p>
      </div>
    </header>
  )
  } else {
    return (
      <header className="header">
        { h1 }
        <h2 className="page-title">{ pageTitle }</h2>
      </header>
    )
  }
}

export default Header