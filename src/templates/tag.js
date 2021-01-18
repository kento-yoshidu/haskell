import React from "react"
import { Link, graphql } from "gatsby"

import Footer from "../components/footer"
import "../scss/style.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faClock, faUndo } from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Tags = ({ pageContext, data }) => {

  const groups = data.tagsGroup.group

  const { tag } = pageContext

  const edges = data.allMarkdownRemark

  console.log(edges)

  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <Link to={"/"}>鳥に生まれることができなかった人へ</Link>
        </h1> 
        <h2 className="page-title">
          「{ tag }」タグの記事
        </h2>
      </header>

      <main className="main">
        <ol className="post-list">
        </ol>
      </main>
    </div>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    tagsGroup: allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`