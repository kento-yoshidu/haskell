import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
          faChevronCircleLeft,
          faChevronCircleRight
        } from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config, counter } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Pagination = ({
        isFirst,
        isLast,
        currentPage,
        pageCount,
      }) => {

  let prevButton,
      nationLinks,
      nextButton;

  prevButton = 
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
    </div>;

  nextButton =
    <div className="preButton">
      {!isLast && (
        <Link
          className="next"
          to={`/page/${currentPage + 1}/`}
        >
          <span>Next</span>
          <FontAwesomeIcon icon={faChevronCircleRight} />
        </Link>
      )}
    </div>;

    if (pageCount > 10) {

      if (currentPage < 5) {
        // 1~4にいるときは、1~5と最後のページを表示
        nationLinks =
          <div className="nationLinks">
            {Array.from({ length: pageCount }, (_, i) => {
              if (i < 5) {
                return (
                  <div
                    className="items"
                  >
                    {i + 1 === currentPage
                      ? <p className="text">{ i + 1 }</p>
                      : <p className="link">
                          <Link to={`/page/${i + 1}/`}>
                            { i + 1 }
                          </Link>
                        </p>
                    }
                  </div> 
              )} else if(i === pageCount - 1) {
                return (
                  <div className="items">
                    <p className="link">
                      <span>... </span>
                      <Link to={`/page/${pageCount}/`}>
                        { pageCount}
                      </Link>
                    </p>
                  </div>
                )
              }
            })}
          </div>
      } else if (currentPage  > pageCount - 4) {
        nationLinks = 
          <div className="nationLinks">
            <div className="items">
              <p className="link">
                <Link to={`/page/1/`}>1</Link>
              </p>
            </div>

            <div>...</div>

            {Array.from({ length: pageCount }, (_, i) => {
              if(true) {
                return (
                  <div>{i + 1}</div>
                )
              }
            })}

            <div>...</div>

            {Array.from({ length: pageCount }, (_, i) => {
              if (i > pageCount - 4 && i <= pageCount) {
                return (
                  <div className="items">
                    {pageCount}
                    {
                      i + 1 === pageCount
                      ? <p className="text"> {pageCount} </p>
                      : <p className="link"> <Link to={`/page/${i}/`}>{i}</Link> </p>
                    }
                  </div>
                )
              }
            })}
          </div>
      } else {
        nationLinks = <div>真ん中</div>
      }

    } else {
      nationLinks =
        <div className="nationLinks">
          {Array.from({ length: pageCount }, (_, i) => (
            <div
              className="items"
              key={i}
            >
              {i + 1 === currentPage
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

    }

  return (
    <div className="pagination">

      {prevButton}

      {nationLinks}

      {nextButton}

    </div>
  )
}

export default Pagination