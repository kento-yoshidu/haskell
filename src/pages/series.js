import React from "react"
import { Link, graphql } from "gatsby"

import Header from "../components/header"
import SEO from "../components/seo"
import Footer from "../components/footer"

const Categorys = ({ data }) => {

  const categories = data.allMarkdownRemark.group

  return (
    <div>
      <SEO
        title="シリーズ一覧"
      />

      <Header
        headerTitle="鳥に生まれることができなかった人へ"
        pageTitle="シリーズ一覧"
        isArticle={ true }
      />


      <main className="main categoriesMain">
        <ul className="categoryList">
          { categories.map(category => {
            return (
              <li className="listItem">
                <Link to={`/series/${category.nodes[0].frontmatter.categorySlug}/page/1/`}>
                  { category.nodes[0].frontmatter.categoryName }({ category.totalCount })
                </Link>
              </li>
            )
          })}
        </ul>
      </main>

      <Footer />
    </div>
  )
}

export default Categorys

export const pageQuery = graphql`
  query ($category: String) {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          categorySlug: {
            eq: $category
          }
        }
      }
    ) {
      totalCount
      group(field: frontmatter___categoryName) {
        nodes {
          frontmatter {
            categorySlug
            categoryName
          }
        }
        fieldValue
        totalCount
      }
    }
  }
`
