import React from "react"

import { Link, StaticQuery, graphql } from "gatsby"
//import { duplicateArgMessage } from "graphql/validation/rules/UniqueArgumentNames";

const CategoryList = () => (
  <StaticQuery
    query={graphql`
      query ($category: String) {
        allMarkdownRemark(filter: {frontmatter: {categorySlug: {eq: $category}}}) {
          totalCount
          group(field: frontmatter___categoryName) {
            nodes {
              frontmatter {
                categorySlug
              }
            }
            fieldValue
          }
        }
      }
    `}

    render={data => (
      <nav>
        <p>カテゴリ一覧</p>
        <ul>
          {data.allMarkdownRemark.group.map(group => (
            <li>
              <Link to={`/category/${group.nodes[0].frontmatter.categorySlug}`}>
                { group.fieldValue}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
  />
)

export default CategoryList