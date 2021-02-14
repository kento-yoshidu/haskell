import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
          faChevronCircleLeft,
          faChevronCircleRight
        } from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Pagination = ({
        isFirst,
        isLast,
        currentPage,
                  postCount,
                  pageCount,
                  isTopPage,
                  isArticle
                }) => {

                  /*
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
  */

  return (
    <div className="pagination">
      <div className="preButton">
        {!isFirst && (
          <Link
            className="prev"
            to={
              currentPage === 2
                ? `/page/1/`
                : `/page/${currentPage - 1}/`
            }
            rel = "prev"
            >
            <FontAwesomeIcon icon={faChevronCircleLeft} />
              <span>Prev</span>
          </Link>
        )}
      </div>

      {!isLast && (
        <Link
          className="next"
          to={`/page/${currentPage + 1}/`}
        >
          <span>Next</span>
          <FontAwesomeIcon icon={faChevronCircleRight} />
        </Link>
      )}
    </div>
  )
}


export default Pagination
        {/*
          
          <div className="nationLinks">
            {Array.from({ length: pageContext.pageCount }, (_, i) => (
              <div
                className="items"
                key={i}
              >
                {i + 1 === pageContext.currentPage
                  ? <p className="text">{ i + 1 }</p>
                  : <p className="link">
                      <Link to={`/page/${i + 1}/`}>
                        { i + 1 }
                      </Link>
                    </p>
                }
              </div>
            ))}
          </div>
*/}