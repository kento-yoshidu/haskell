import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
          faAngleLeft,
          faAngleDoubleLeft,
          faAngleRight,
          faAngleDoubleRight
        } from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
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

  if (!isFirst) {
    topButton =
      <Link
        to={`/page/1/`}
        className="top-button"
      >
        <FontAwesomeIcon icon={faAngleDoubleLeft} />
      </Link>

    prevButton = 
      <Link
        className="prev-button"
        to={
          currentPage === 2
            ? `/page/1/`
            : `/page/${currentPage - 1}/`
        }
        rel = "prev"
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </Link>
  }

  if(!isLast) {
    nextButton =
      <Link
        className="next-button"
        to={`/page/${currentPage + 1}/`}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </Link>

    lastButton =
      <Link
        to={`/page/${pageCount}/`}
        className="last-button"
      >
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      </Link>

  }


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