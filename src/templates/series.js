import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/header"
import PageInfo from "../components/pageInfo"
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

const Series = ({ pageContext, data }) => {

  const { seriesName, seriesSlug } = pageContext
  const nodes = data.allMarkdownRemark.nodes

  return (
    <div>
      <SEO
        title={`${ seriesName }シリーズの記事`}
      />

      <Header
        pageTitle={`${ seriesName }シリーズの記事` }
      />

      <PageInfo
        postCount={pageContext.postCount} 
        currentPage={pageContext.currentPage}
        pageCount={`${pageContext.pageCount}`}
      />

      <main className="main">

      <section className="post-list">
        { nodes.map((node) => {

          const pageTitle = node.frontmatter.title 

          return (
            <div
              key={node.id}
              className="post-item"
            >
              <p className="post-title">
                <Link to={node.fields.slug} itemProp="url">
                  <span itemProp="headline">{ pageTitle }</span>
                </Link>
              </p>

              <div className="info">
                <div className="date">
                  <p className="post"><FontAwesomeIcon icon={faClock} />{node.frontmatter.postdate}</p>
                  <p className="update"><FontAwesomeIcon icon={faUndo} />{node.frontmatter.updatedate}</p>
                </div>

                <p className="series">
                  <FontAwesomeIcon icon={faFolder} /> <span>シリーズ</span>
                  <Link to={`/series/${seriesSlug}/page/1/`}>{seriesName}</Link>
                </p>

                <p className="tags"><FontAwesomeIcon icon={faTags} /> <span>タグ</span>
                  {
                    node.frontmatter.tags.map(tag => {
                      return (
                        <Link
                          to={`/tag/${tag}/page/1/`}
                          key={`${node.key}${tag}`}
                        >
                          #{ tag }
                        </Link>
                      )
                    })
                  }
                </p>
              </div>
            </div>
            )
          })
        }
      </section>

      <ol className="pagination">
        <div className="preButton">
          {!pageContext.isFirst && (
            <p className="prev">
              <FontAwesomeIcon icon={faChevronCircleLeft} />
              <Link
                to={
                  pageContext.currentPage === 2
                    ? `/series/${seriesSlug}/page/1/`
                    : `/series/${seriesSlug}/page/${pageContext.currentPage - 1}/`
                }
                rel = "prev"
              >
                Prev
              </Link>
            </p>
          )}
        </div>

        <div className="nationLinks">
          { Array.from({ length: pageContext.pageCount }, (_, i) => (
            <li className="items" key={i}>
              { i + 1 === pageContext.currentPage
                  ? <p className="text">{ i + 1 }</p>
                  : <p className="link">
                      <Link to={`/series/${seriesSlug}/page/${i + 1}/`}>
                        { i + 1 }
                      </Link>
                    </p>
              }
            </li>
          )) }
        </div>

        {!pageContext.isLast && (
          <p className="next">
            <Link to={`/series/${seriesSlug}/page/${pageContext.currentPage + 1}/`} rel="next">
              Next
            </Link>
            <FontAwesomeIcon icon={faChevronCircleRight} />
          </p>
        )}
      </ol>

      </main>
      <Footer />
    </div>
  )
}

export default Series

export const pageQuery = graphql`
  query(
    $seriesSlug: String,
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
          seriesSlug: {
            eq: $seriesSlug
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
          seriesName
          seriesSlug
          title
          tags
        }
      }
    }
  }
`