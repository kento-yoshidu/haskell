import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import "../scss/style.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons"


const BlogIndex = ({ data, location }) => {
  /*
  return (
    <div>
      <div>test</div>
      <Link to={'hello-world/01'}>test</Link>
      <Link to={'hello-world/02'}>test</Link>
    </div>
  ) */

  // サイトタイトル => gatsby-config.js
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  
  const posts = data.allMarkdownRemark.nodes

  /*
  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }*/

  return (
    //<Layout location={location} title={siteTitle}>
    <div>
      <SEO title="記事一覧" />
      <header className="header">
        <h1 className="header-title">記事一覧</h1> 
        <FontAwesomeIcon icon={faCheckSquare} />
      </header>

      {/*<Bio />*/}

      <ol style={{ listStyle: `none` }} className="post-list">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >

                <header>
                  <h2 className="post-title">
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>

                  <div class="info">
                    <p className="category">{post.frontmatter.category}</p>
                    <p className="post">{post.frontmatter.postdate}</p>
                    <p className="update">{post.frontmatter.updatedate}</p>
                  </div>

                </header>

                <p
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                  itemProp="description"
                  className="description"
                />
              </article>
            </li>
          )
        })}
      </ol>
      <Footer />
    </div>
    //</Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___postdate], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          postdate(formatString: "YYYY年 MM月 DD日")
          updatedate(formatString: "YYYY年 MM月 DD日")
          title
          description
          category
        }
      }
    }
  }
`
