import React from "react"
import { Link, graphql } from "gatsby"

import Header from "../components/header"
import Links from "../components/links"
import SEO from "../components/seo"
import Footer from "../components/footer"
import FixHeader from "../components/fixHeader"

import "prismjs/themes/prism-tomorrow.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const { previous, next } = data;

  return (
    <div>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <FixHeader />

      <Header
        headerTitle={ data.site.siteMetadata.title }
        pageTitle={ post.frontmatter.title }
      />

      <section className="info">
        <p>投稿日{post.frontmatter.postdate}</p>
        <p>最終更新日{post.frontmatter.updatedate}</p>
        <p>カテゴリ：{post.frontmatter.category}</p>
      </section>

      <Links />
      <div className="wrapper">

        <main
          dangerouslySetInnerHTML={{ __html: post.html }}
          //itemProp="articleBody"
          className="main article"
        />
      </div>

      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            以前の投稿!
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            以後の投稿!
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
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
      frontmatter {
        title
        postdate(formatString: "YYYY年 MM月 DD日")
        updatedate(formatString: "YYYY年 MM月 DD日")
        description
        categoryName
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