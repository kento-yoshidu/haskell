import React from "react"

import { Link, StaticQuery, graphql } from "gatsby"
import { duplicateArgMessage } from "graphql/validation/rules/UniqueArgumentNames";

const CategoryList = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          group(field: frontmatter___categoryName) {
            fieldValue
            totalCount
          }
        }
      }
    `}

    render={data => (
      <nav>
        <p>カテゴリ一覧</p>
        <ul>
          {data.allMarkdownRemark.group.map(categoryName => (
            <li key={categoryName.fieldValue}>
              <Link to={`/categories/${categoryName.fieldValue}/`}>
                {categoryName.fieldValue} ({categoryName.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )}
  />
)

export default CategoryList