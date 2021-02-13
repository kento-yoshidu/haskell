import React from "react"
import { Link, graphql } from "gatsby"

import Header from "../components/header"
import SEO from "../components/seo"
import ArticleInfo from "../components/articleInfo"
import Footer from "../components/footer"

import "prismjs/themes/prism-tomorrow.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const { previous, next } = data;
  const { tableOfContents } = data.markdownRemark;

  return (
    <div>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <Header
        headerTitle={ data.site.siteMetadata.title }
        isArticle={ true }
      />

      <ArticleInfo
        categorySlug={ post.frontmatter.categorySlug}
        categoryName={ post.frontmatter.categoryName}
        pageTitle={ post.frontmatter.title }
        postdate={ post.frontmatter.postdate}
        updatedate={ post.frontmatter.updatedate }
        description={ post.frontmatter.description }
        tags={ post.frontmatter.tags }
      />

      <div className="wrapper">
        <div
          className="table-of-content"
          dangerouslySetInnerHTML={{ __html: tableOfContents }}
        />

        <main
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="main article"
        />
      </div>

      <nav className="beforeAndAfter">
        {previous && (
          <Link
            to={previous.fields.slug} rel="prev"
            class="before"
          >
            <h2>← 前の記事</h2>
            <p className="title">
              {previous.frontmatter.title}
            </p>
          </Link>
        )}
        {next && (
          <Link
            to={next.fields.slug}
            className="after"
          >
            <h2>後の記事 →</h2>
            <p className="title">
              {next.frontmatter.title}
            </p>
          </Link>
        )}
      </nav>

      <Footer />
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      frontmatter {
        title
        postdate(formatString: "YYYY年 MM月 DD日")
        updatedate(formatString: "YYYY年 MM月 DD日")
        description
        categoryName
        categorySlug
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`