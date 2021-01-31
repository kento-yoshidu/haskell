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

const Category = ({ pageContext, data }) => {

  const { categoryName, categorySlug } = pageContext

  const nodes = data.allMarkdownRemark.nodes

  return (
    <div>
      <SEO
        title={`${ categoryName }カテゴリの記事`}
      />

      <Header
        headerTitle="鳥に生まれる人ができなかった人へ"
        pageTitle={`${ categoryName }カテゴリの記事`}
      />

      <Links />

      <main className="main">

      <ol className="post-list">
        { nodes.map((node) => {

          const pageTitle = node.frontmatter.title 

          return (
            <li
              key={node.id}
              className="post-list-item"
            >

              <h2 className="post-title">
                <Link to={node.fields.slug} itemProp="url">
                  <span itemProp="headline">{ pageTitle }</span>
                </Link>
              </h2>
              <div className="info">
                <p className="category">
                  <FontAwesomeIcon icon={faFolder} />
                  <Link to={`/category/${categorySlug}/page/1/`}>{categoryName}</Link>
                </p>
                <p className="post"><FontAwesomeIcon icon={faClock} />{node.frontmatter.postdate}</p>
                <p className="update"><FontAwesomeIcon icon={faUndo} />{node.frontmatter.updatedate}</p>
                <p className="tags"><FontAwesomeIcon icon={faTags} />
                  {
                    node.frontmatter.tags.map(tag => {
                      return (
                        <Link
                          to={`/tag/${tag}/`}
                          key={node.key}
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
                  ? `/category/${categorySlug}/page/1/`
                  : `/category/${categorySlug}/page/${pageContext.currentPage - 1}/`
              }
              rel = "prev"
            >
              前のページ
            </Link>
          </p>
        )}

        {!pageContext.isLast && (
          <p className="next">
            <Link to={`/category/${categorySlug}/page/${pageContext.currentPage + 1}/`} rel="next">
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

export default Category

export const pageQuery = graphql`
  query(
    $categorySlug: String,
    $limit: Int!,
    $skip: Int!
  ) {
    allMarkdownRemark (
      sort: {
        fields: [frontmatter___postdate],
        order: DESC
      }
      limit: $limit,
      skip: $skip
      filter: {
        frontmatter: {
          categorySlug: {
            eq: $categorySlug
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
          title
          tags
        }
      }
    }
  }
`