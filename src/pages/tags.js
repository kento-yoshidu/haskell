import React from "react"
import { Link, graphql } from "gatsby"

import Links from "../components/links"
import Footer from "../components/footer"

const Tags = ({ data, location }) => {

  const tags = data.allMarkdownRemark.group

  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <Link to={"/"}>
            鳥に生まれることができなかった人へ
          </Link>
        </h1> 
        <h2 className="page-title">タグ一覧</h2>
      </header>

      <Links />

      <main className="main tagsMain">
        <ul className="tagList">
          {tags.map(tag => {
            return (
              <li className="listItem">
                <Link to={`/tag/${tag.fieldValue}`}>
                  { tag.fieldValue }({ tag.totalCount })
                </Link>
              </li>
            )
          })}
        </ul>
      </main>

      <Footer />
    </div>
  )
}

export default Tags

export const pageQuery = graphql`
  query ($tags: String) {
    allMarkdownRemark(filter: {frontmatter: {tags: {eq: $tags}}}) {
      group(field: frontmatter___tags, limit: 1) {
        nodes {
          frontmatter {
            tags
          }
        }
        fieldValue
        totalCount
      }
    }
  }
`


