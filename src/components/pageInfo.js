import React from "react"
//import { Link, useStaticQuery, graphql } from "gatsby"

const PageInfo = ({
  currentPage,
  postCount,
  pageCount
}) => {
  return (
    <div class="countInfo">
      <p className="page"><span>{postCount}</span> 件の記事</p>
      <p className="page"><span>{pageCount}</span> ページ中 / <span>{currentPage}</span> ページ目</p>
    </div>
  )
}

export default PageInfo