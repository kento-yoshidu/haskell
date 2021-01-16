import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import PageIndex from "../components/pageIndex"
import Footer from "../components/footer"
import FixHeader from "../components/fixHeader"

import "prismjs/themes/prism-tomorrow.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  //const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  return (
    <div>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <FixHeader />

      <header className="header">
        <h1 className="header-title" itemProp="headline">
          <Link to={"/"}>
            {data.site.siteMetadata.title}
          </Link>
        </h1>

        <h2 className="page-title" itemProp="headline">{post.frontmatter.title}</h2>
      </header>

      <section className="info">
        <p>投稿日{post.frontmatter.postdate}</p>
        <p>最終更新日{post.frontmatter.updatedate}</p>
        <p>カテゴリ：{post.frontmatter.category}</p>
      </section>

      <div className="wrapper">
        <PageIndex />


        <main
          dangerouslySetInnerHTML={{ __html: post.html }}
          //itemProp="articleBody"
          className="main"
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
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
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

/*
export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categorySlug: { in: [$category] } } }
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
  }
`
*/

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