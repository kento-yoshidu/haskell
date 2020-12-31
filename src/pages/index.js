import React from "react"
import { Link, graphql } from "gatsby"

//import Bio from "../components/bio"
//import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import CategoryList from "../components/category-list"
import "../scss/style.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faClock, faUndo } from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const BlogIndex = ({ data, location }) => {

  // サイトタイトル => gatsby-config.js
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  
  const posts = data.allMarkdownRemark.nodes

  return (
    <div>
      <SEO title="記事一覧" />
      <header className="header">
        <h1 className="header-title">鳥に生まれることができなかった人へ</h1> 
        <p>Powered by Gatsby</p>
      </header>

      <CategoryList />

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
                    <p className="category"><FontAwesomeIcon icon={faFolder} />{post.frontmatter.categoryName}</p>
                    <p className="post"><FontAwesomeIcon icon={faClock} />{post.frontmatter.postdate}</p>
                    <p className="update"><FontAwesomeIcon icon={faUndo} />{post.frontmatter.updatedate}</p>
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
          categoryName
        }
      }
    }
  }
`
