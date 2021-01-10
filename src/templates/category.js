import React from "react"
import { graphql } from "gatsby"

const Category = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  //const catHeader = `[${category}]カテゴリの記事`

  console.log('hogehoge')

  return (
    <div>
      <p>test</p>
      { edges.map((node) => {

        console.log(node.node.frontmatter.categorySlug)
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
  query ($category: String) {
    allMarkdownRemark(
      filter: { frontmatter: {categorySlug: { eq: $category }}}
    ) {
      edges {
        node {
          frontmatter {
            categorySlug
          }
        }
      }
    }
  }
`