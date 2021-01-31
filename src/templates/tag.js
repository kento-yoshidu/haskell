import React from "react"
import { Link, graphql } from "gatsby"

import Header from "../components/header"
import SEO from "../components/seo"
import Links from "../components/links"
import Footer from "../components/footer"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFolder,
          faClock,
          faUndo,
          faTags,
          faChevronCircleLeft,
          faChevronCircleRight
        } from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Tags = ({ pageContext, data }) => {

  const { tag } = pageContext
  const nodes = data.allMarkdownRemark.nodes
  
  return (
    <div>
      <SEO
        title={`${ tag }タグの記事`}
      />

      <Header
        headerTitle="鳥に生まれることができなかった人へ"
        pageTitle={`${ tag }タグの記事`}
      />

      <Links />

      <main className="main">

      <ol className="post-list">
        { nodes.map(node => {
          const title = node.frontmatter.title 

          return (
            <li
              key={node.id}
              className="post-list-item"
            >

              <h2 className="post-title">
                <Link to={node.fields.slug} itemProp="url">
                  <span itemProp="headline">{ title }</span>
                </Link>
              </h2>

              <div className="info">
                <p className="category">
                  <FontAwesomeIcon icon={faFolder} />
                  <Link to={`/category/${node.frontmatter.categorySlug}/page/1/`}>{node.frontmatter.categoryName}</Link>
                </p>
                <p className="post"><FontAwesomeIcon icon={faClock} />{node.frontmatter.postdate}</p>
                <p className="update"><FontAwesomeIcon icon={faUndo} />{node.frontmatter.updatedate}</p>
                <p className="tags"><FontAwesomeIcon icon={faTags} />
                  {
                    node.frontmatter.tags.map(tag => {
                      return (
                        <Link
                          to={`/tag/${tag}/page/1/`}
                          key={ node.id + tag }
                        >
                          #{ tag }
                        </Link>
                      )
                    })
                  }
                </p>
              </div>
            </li>
            )
          })
        }
      </ol>

      <div className="pagination">
        {!pageContext.isFirst && (
          <p className="prev">
            <FontAwesomeIcon icon={faChevronCircleLeft} />
            <Link
              to={
                pageContext.currentPage === 2
                  ? `/tag/${tag}/page/1/`
                  : `/tag/${tag}/page/${pageContext.currentPage - 1}/`
              }
              rel = "prev"
            >
              前のページ
            </Link>
          </p>
        )}

        {!pageContext.isLast && (
          <p className="next">
            <Link to={`/tag/${tag}/page/${pageContext.currentPage + 1}/`} rel="next">
              次のページ
            </Link>
            <FontAwesomeIcon icon={faChevronCircleRight} />
          </p>
        )}
      </div>
      </main>

      <Footer />
    </div>
  )
}

export default Tags

export const pageQuery = graphql`
  query(
    $tag: String,
    $limit: Int!,
    $skip: Int!
  ) {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___postdate],
        order: DESC
      }
      limit: $limit,
      skip: $skip
      filter: {
        frontmatter: {
          tags: {
            in: [$tag]
          }
        }
      }
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          postdate(formatString: "YYYY年MM月DD日")
          updatedate(formatString: "YYYY年MM月DD日")
          categoryName
          categorySlug
          categoryName
          title
          tags
        }
      }
    }
  }
`
