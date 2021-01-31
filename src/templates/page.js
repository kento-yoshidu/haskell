import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/header"
import Links from "../components/links"
import Footer from "../components/footer"
import "../scss/style.scss"

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

const BlogIndex = ({ data, location, pageContext }) => {

  const siteData = data.siteData;
  const postData = data.postData;

  return (
    <div>
      <SEO
        title="記事一覧"
      />

      <Header
        headerTitle={ siteData.siteMetadata.title}
        pageTitle="記事一覧"
        isTopPage={ true }
      />

      <Links />

      <main className="main">
        <ul className="post-list">
          {postData.nodes.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.id}
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <h2 className="post-title">
                  <Link to={post.fields.slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h2>

                <div className="info">
                  <p className="category">
                    <FontAwesomeIcon icon={faFolder} />
                    <Link to={`/category/${post.frontmatter.categorySlug}/page/1/`}>
                    {post.frontmatter.categoryName}</Link>
                  </p>
                  <p className="post"><FontAwesomeIcon icon={faClock} />{post.frontmatter.postdate}</p>
                  <p className="update"><FontAwesomeIcon icon={faUndo} />{post.frontmatter.updatedate}</p>
                  <p className="tags"><FontAwesomeIcon icon={faTags} />
                    {
                      post.frontmatter.tags.map(tag => {
                        return (
                          <Link 
                            to={`/tag/${tag}/page/1/`}
                            key={`${tag}`}
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
          })}
        </ul>

        <div className="pagination">
          {!pageContext.isFirst && (
            <p className="prev">
              <FontAwesomeIcon icon={faChevronCircleLeft} />
              <Link
                to={
                  pageContext.currentPage === 2
                    ? `/page/1/`
                    : `/page/${pageContext.currentPage - 1}/`
                }
                rel = "prev"
              >
                前のページ
              </Link>
            </p>
          )}

          {!pageContext.isLast && (
            <p className="next">
              <Link to={`/page/${pageContext.currentPage + 1}`} rel="next">
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

export default BlogIndex

export const pageQuery = graphql`
  query(
    $limit: Int!,
    $skip: Int!
    ) {
      siteData: site {
        siteMetadata {
          title
          description
        }
      }

      postData:
        allMarkdownRemark(
          sort: {
            fields: [frontmatter___postdate],
            order: DESC,
          }
          limit: $limit,
          skip: $skip
        ) {
          nodes {
            id
            excerpt
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
