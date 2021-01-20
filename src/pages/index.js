import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import Links from "../components/links"
import Footer from "../components/footer"
import "../scss/style.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faClock, faUndo, faTags } from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const BlogIndex = ({ data, location }) => {

  const siteData = data.siteData;
  const postData = data.postData;

  return (
    <div>
      <SEO
        title={siteData.siteMetadata.title }
      />

      <header className="header">
        <h1 className="header-title">{ siteData.siteMetadata.title}</h1> 
        <h2 className="page-title">記事一覧</h2>
      </header>

      <Links />

      <main className="main post-list">
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
                    <Link to={`category/${post.frontmatter.categorySlug}`}>
                    {post.frontmatter.categoryName}</Link>
                  </p>
                  <p className="post"><FontAwesomeIcon icon={faClock} />{post.frontmatter.postdate}</p>
                  <p className="update"><FontAwesomeIcon icon={faUndo} />{post.frontmatter.updatedate}</p>
                  <p className="tags"><FontAwesomeIcon icon={faTags} />
                    {
                      post.frontmatter.tags.map(tag => {
                        return (
                          <a
                            href={`/tag/${tag}`}
                            key={`${tag}`}
                          >
                            { tag }
                          </a>
                        )
                      })
                    }
                  </p>
                </div>
              </li>
            )
          })}
        </ul>

        </main>
      <Footer />
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    siteData: site {
      siteMetadata {
        title
        description
      }
    }

    postData: allMarkdownRemark(
      sort: {
        fields: [frontmatter___postdate],
        order: DESC
      }
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
