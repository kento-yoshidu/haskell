import React from "react"
import { Link, graphql } from "gatsby"

//import Bio from "../components/bio"
//import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  return (
    <div>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <header className="header">
        <h1 itemProp="headline">{post.frontmatter.title}</h1>
      </header>

      <section className="info">
        <p>投稿日{post.frontmatter.postdate}</p>
        <p>最終更新日{post.frontmatter.updatedate}</p>
        <p>カテゴリ：{post.frontmatter.category}</p>
      </section>

      <section
        dangerouslySetInnerHTML={{ __html: post.html }}
        itemProp="articleBody"
      />

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
        category
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
