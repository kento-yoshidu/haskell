import React from "react"
import { graphql } from "gatsby"

const Category = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark

  return (
    <div>
      <p>test</p>
      { edges.map((node) => {

        console.log(node)
        return (
          <p> { node.node.frontmatter.categorySlug }</p>
        )
      }
      ) }
    </div>
  )
}

export default Category

export const pageQuery = graphql`
  query($categoryId: String) {
    allMarkdownRemark (
      filter: {
        frontmatter: {
          categorySlug: {
            eq: $categoryId
          }
        }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            categorySlug
          }
        }
      }
    }
  }
`