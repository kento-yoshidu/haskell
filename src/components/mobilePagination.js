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


const MobilePagination = ({
        isFirst,
        isLast,
        currentPage,
        pageCount,
      }) => {

  let topButton,
      lastButton,
      prevButton,
      nextButton;

  topButton =
    <div>
      {!isFirst && (
        <Link
          to={`/page/1/`}
        >
          <span>Prev</span>
        </Link>
      )}
    </div>

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
    

  lastButton =
    <div>
      {!isLast && (
        <Link
          to={`/page/${pageCount}/`}
        >
          last
        </Link>

      )}
    </div>

  return (
    <div className="mobile-pagination">
      {topButton}
      {prevButton}
      {nextButton}
      {lastButton}
    </div>
  )
}

export default MobilePagination