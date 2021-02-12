import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFolder, faClock, faUndo, faTags } from "@fortawesome/free-solid-svg-icons"
import { faGithub} from "@fortawesome/free-brands-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Header = ({ headerTitle,
                  pageTitle,
                  currentPage,
                  postCount,
                  pageCount,
                  postdate,
                  updatedate,
                  categorySlug,
                  categoryName,
                  tags,
                  isTopPage,
                  isArticle,
                }) => {

  let h1,
      info,
      tag,
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

  if(isArticle) {

    /*tag = tags.map(tag => {
        return (
          <Link to={`/tag/${ tag }/page/1/`}>{tag}</Link>
        )
      }
    )
    */

    info = (
      <div className="info">
        <div>
          <p>
            <FontAwesomeIcon icon={faClock} />{ postdate }
          </p>
          <p>
            <FontAwesomeIcon icon={faUndo} />{ updatedate }
          </p>
        </div>

        <div>
          <p>
            <FontAwesomeIcon icon={ faFolder } />
            <Link to={`/category/${ categorySlug }/page/1/`}>
              { categoryName }
            </Link>
          </p>
          <p>
            <FontAwesomeIcon icon={faTags} />
            { tag }
          </p>
        </div>
      </div>
    )
  } else {
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
      <div className="links">
        <Link
          to={"https://www.toriwatari.work/"}
          target="_blink"
        >
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link
          to={"https://github.com/kento-yoshidu"}
          target="_blink"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>

      </div>
      <h2 className="page-title">
        { pageTitle }
      </h2>
      { info }
      { countInfo }
    </header>
  )
}

export default Header