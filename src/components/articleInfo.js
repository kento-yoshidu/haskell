import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUndo ,faFolder, faTags } from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const ArticleInfo = ({
    pageTitle,
    postdate,
    updatedate,
    categorySlug,
    categoryName,
    tags,
    description
  }) => {

    let tag = tags.map(tag => {
      return (
        <p key={`p${tag}`}>
          <Link
            to={`/tag/${tag}/page/1/`}
            key={`link${tag}`}
          >
          #{ tag }
          </Link>
        </p>
      )
    })

    return (
      <div className="article-info">

        <p className="category">
          <FontAwesomeIcon icon={ faFolder } />
          <Link to={`/series/${categorySlug}/page/1/`}>
            { categoryName }
          </Link>
        </p>

        <h1 className="pageTitle">{pageTitle}</h1>

        <div className="date-info">
          <p>
            <FontAwesomeIcon icon={faClock} />{ postdate }
          </p>
          <p>
            <FontAwesomeIcon icon={faUndo} />{ updatedate }
          </p>
        </div>

          <div className="tags">
            <FontAwesomeIcon icon={ faTags } />
            { tag }
          </div>

          <p className="description">
            { description }
          </p>
        </div>
      )
}

export default ArticleInfo