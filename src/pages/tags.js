import React from "react"
import { Link, graphql } from "gatsby"

import Header from "../components/header"
import Links from "../components/links"
import Footer from "../components/footer"

const Tags = ({ data, location }) => {

  const tags = data.allMarkdownRemark.group

  return (
    <div>

      <Header
        headerTitle="鳥に生まれることができなかった人へ"
        pageTitle="タグ一覧"
        isTopPage={ false }
      />

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
  query ($tag: String) {
    allMarkdownRemark(filter: {frontmatter: {tags: {eq: $tag}}}) {
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
