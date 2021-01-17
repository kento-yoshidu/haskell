import React from "react"
import { Link, graphql } from "gatsby"

import Footer from "../components/footer"
import CategoryList from "../components/category-list"
//import "../scss/style.scss"


const Categorys = ({ data, location }) => {

  const categories = data.allMarkdownRemark.group

  categories.map(category => {
    console.log(category.nodes[0].frontmatter)
  })

  return (
    <div>
      <header className="header">
        <h1 className="header-title">鳥に生まれることができなかった人へ</h1> 
        <h2 className="page-title">タグ一覧</h2>
      </header>

      <main className="main">
        <ol>
          { categories.map(category => {
            return (
              <li>
                <Link to={`/category/${category.nodes[0].frontmatter.categorySlug}`}>
                  hoge{ category.nodes[0].frontmatter.categoryName }
                </Link>
              </li>
            )
          })}
        </ol>
      </main>


    </div>
  )
}

export default Categorys

export const pageQuery = graphql`
  query ($category: String) {
    allMarkdownRemark(filter: {frontmatter: {categorySlug: {eq: $category}}}) {
      totalCount
      group(field: frontmatter___categoryName, limit: 1) {
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
