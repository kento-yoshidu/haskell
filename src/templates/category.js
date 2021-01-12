import React from "react"
import { Link, graphql } from "gatsby"

const Category = ({ pageContext, data }) => {
  //const { category } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark

  return (
    <div>
      <p>test</p>
      { edges.map((node) => {
        const title = node.node.frontmatter.title 

        console.log(node.node)

        return (
          <div>
            <p> { title }</p>
            <Link to={node.node.fields.slug}>{ title }</Link>
          </div>
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
            title
          }
        }
      }
    }
  }
`