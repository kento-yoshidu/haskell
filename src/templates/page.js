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

      <main className="main">
        <section className="post-list">
          <h2 className="section-title">
            記事一覧　ページ { pageContext.currentPage } / { pageContext.numberOfPages }
          </h2>

          {postData.nodes.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <Link key={post.id}
                className="post-item"
                itemScope
                itemType="http://schema.org/Article"
                to={post.fields.slug}
              >
                <p className="post-title">
                  <Link to={post.fields.slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </p>

                <div className="info">
                  <div className="date">
                    <p className="post"><FontAwesomeIcon icon={faClock} />{post.frontmatter.postdate}</p>
                    <p className="update"><FontAwesomeIcon icon={faUndo} />{post.frontmatter.updatedate}</p>
                  </div>

                  <p className="category">
                    <FontAwesomeIcon icon={faFolder} /> <span>Category</span>
                    <Link to={`/category/${post.frontmatter.categorySlug}/page/1/`}>
                    {post.frontmatter.categoryName}</Link>
                  </p>

                  <p className="tags">
                    <FontAwesomeIcon icon={faTags} /> <span>Tag</span>
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
              </Link>
            )
          })}
        </section>

        <ol className="pagination">
          <div className="preButton">
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
                  Prev
                </Link>
              </p>
            )}
          </div>

          <div className="nationLinks">
            {
              Array.from({ length: pageContext.numberOfPages }, (_, i) => (
                <li className="items">
                  {
                    i + 1 === pageContext.currentPage
                      ? <p className="text">{ i + 1 }</p>
                      : <p className="link">
                          <Link to={`/page/${i + 1}/`}>
                            { i + 1 }
                          </Link>
                        </p>
                  }
                </li>
              ))
            }
          </div>

          {!pageContext.isLast && (
            <p className="next">
              <Link to={`/page/${pageContext.currentPage + 1}/`} rel="next">
                Next
              </Link>
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </p>
          )}

        </ol>

        <Links />
      
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
