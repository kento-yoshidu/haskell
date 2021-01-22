import React from "react"
import { Link, graphql } from "gatsby"

import Header from "../components/header"
import Links from "../components/links"
import Footer from "../components/footer"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faClock, faUndo, faTags } from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Category = ({ pageContext, data }) => {

  const { category } = pageContext
  const nodes = data.allMarkdownRemark.nodes

  return (
    <div>

      <Header
        headerTitle="鳥に生まれる人ができなかった人へ"
        pageTitle={`${ category } カテゴリの記事`}
      />

      <Links />

      <main className="main">

      <ol className="post-list">
        { nodes.map((node) => {

          const title = node.frontmatter.title 

          return (
            <li
              key={node.id}
              className="post-list-item"
            >

              <h2 className="post-title">
                <Link to={node.fields.slug} itemProp="url">
                  <span itemProp="headline">{ title }</span>
                </Link>
              </h2>
              <div className="info">
                <p className="category">
                  <FontAwesomeIcon icon={faFolder} />
                  <Link to={`/category/${node.frontmatter.categorySlug}`}>{node.frontmatter.categoryName}</Link>
                </p>
                <p className="post"><FontAwesomeIcon icon={faClock} />{node.frontmatter.postdate}</p>
                <p className="update"><FontAwesomeIcon icon={faUndo} />{node.frontmatter.updatedate}</p>
                <p className="tags"><FontAwesomeIcon icon={faTags} />
                  {
                    node.frontmatter.tags.map(tag => {
                      return (
                        <Link
                          to={`/tag/${tag}`}>{ tag }
                        </Link>
                      )
                    })
                  }
                </p>
              </div>
              </li>
            )
          })
        }
      </ol>
      </main>

      <Footer />
    </div>
  )
}

export default Category

export const pageQuery = graphql`
  query($categoryId: String) {
    allMarkdownRemark (
      sort: {
        fields: [frontmatter___postdate],
        order: DESC
      }
      filter: {
        frontmatter: {
          categorySlug: {
            eq: $categoryId
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
          categoryName
          categorySlug
          title
          tags
        }
      }
    }
  }
`