import React from "react"
import { Link, graphql } from "gatsby"

import Footer from "../components/footer"
import CategoryList from "../components/category-list"
//import "../scss/style.scss"


const Tags = ({ data, location }) => {

  const tags = data.allMarkdownRemark.group

  console.log(location)

  return (
    <div>
      <header className="header">
        <h1 className="header-title">鳥に生まれることができなかった人へ</h1> 
        <h2 className="page-title">タグ一覧</h2>
      </header>

      <main className="main">
        <ul className="tagList">
          {tags.map(tag => {
            return (
              <li>
                <Link to={`/tag/${tag.fieldValue}`}>
                  { tag.fieldValue } （{ tag.totalCount }）
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


