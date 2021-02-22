import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/header"
import Pagination from "../components/pagination"
import MobliePagination from "../components/mobilePagination"
import Links from "../components/links"
import Footer from "../components/footer"
import "../scss/style.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFolder,
          faClock,
          faUndo,
          faTags,
        } from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const BlogIndex = ({ data, pageContext }) => {

  const postData = data.postData;

  return (
    <div>
      <SEO
        title="記事一覧"
      />

      <Header
        pageTitle="記事一覧"
        isTopPage={true}
        postCount={pageContext.postCount}
        currentPage={pageContext.currentPage}
        pageCount={pageContext.pageCount}
      />

      <main className="main">
        <section className="post-list">
          {postData.nodes.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <div key={post.id}
                className="post-item"
                itemScope
                itemType="http://schema.org/Article"
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
                    {post.frontmatter.tags.map(tag => {
                      return (
                        <Link 
                          to={`/tag/${tag}/page/1/`}
                          key={`${tag}`}
                        >
                          #{ tag }
                        </Link>
                      )
                    })}
                  </p>
                </div>
              </div>
            )
          })}
        </section>

        <Pagination
          isFirst={pageContext.isFirst}
          isLast={pageContext.isLast}
          pageCount={pageContext.pageCount}
          currentPage={pageContext.currentPage}
        />

        <MobliePagination
          isFirst={pageContext.isFirst}
          isLast={pageContext.isLast}
          pageCount={pageContext.pageCount}
          currentPage={pageContext.currentPage}
        />

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
