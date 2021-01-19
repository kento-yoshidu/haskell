import React from "react"
import { Link, graphql } from "gatsby"

import Footer from "../components/footer"
import "../scss/style.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faClock, faUndo, faTags } from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Tags = ({ pageContext, data }) => {

  const { tag } = pageContext
  const nodes = data.allMarkdownRemark.edges

  console.log(nodes)

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
        <ol className="post-list" style={{ listStyle: `none` }}>
          {
            nodes.map(node => {

              const title = node.node.frontmatter.title 

              return (
                <li key={node.node.id}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h2 className="post-title">
                        <Link to={node.node.fields.slug} itemProp="url">
                          <span itemProp="headline">{ title }</span>
                        </Link>
                      </h2>
                      <div className="info">
                        <p className="category">
                          <FontAwesomeIcon icon={faFolder} />
                          <Link to={`/category/${node.node.frontmatter.categorySlug}`}>{node.node.frontmatter.categoryName}</Link>
                        </p>
                        <p className="post"><FontAwesomeIcon icon={faClock} />{node.node.frontmatter.postdate}</p>
                        <p className="update"><FontAwesomeIcon icon={faUndo} />{node.node.frontmatter.updatedate}</p>
                        <p className="tags"><FontAwesomeIcon icon={faTags} />
                          {
                            node.node.frontmatter.tags.map(tag => {
                              return (
                                <a href="/">{ tag }</a>
                              )
                            })
                          }
                        </p>
                      </div>
                    </header>
                  </article>
                </li>
              )
            })
          }
        </ol>
      </main>

      <Footer />
    </div>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date], order: DESC
      }
      filter: {
        frontmatter: {
          tags: {
            in: [$tag]
          }
        }
      }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            postdate(formatString: "YYYY年 MM月 DD日")
            updatedate(formatString: "YYYY年 MM月 DD日")
            categoryName
            categorySlug
            description
            categoryName
            title
            tags
          }
        }
      }
    }
  }
`
