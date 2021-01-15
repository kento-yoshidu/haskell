import React from "react"
import { Link, graphql } from "gatsby"

import Footer from "../components/footer"
import CategoryList from "../components/category-list"
//import "../scss/style.scss"


const Categorys = ({ data, location }) => {

  return (
    <div>
      data
    </div>
  )
}

export default Categorys

export const pageQuery = graphql`
  query ($category: String) {
    allMarkdownRemark(filter: {frontmatter: {categorySlug: {eq: $category}}}) {
      totalCount
      group(field: frontmatter___categoryName, limit: 1) {
        nodes {
          frontmatter {
            categorySlug
          }
        }
        fieldValue
        totalCount
      }
    }
  }
`
