import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

import TestComponent from "../components/test"

/*
import "prismjs/themes/prism-tomorrow.css"
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
*/

import * as Styles from "../styles/blogPost.module.scss"

interface Props {
  data: GatsbyTypes.BlogPostBySlugQuery
  location: string
}
const Blog: React.VFC<Props> = ({ data, location }) => (
  <>
    <TestComponent />

    <div className={Styles.postWrapper}>
      <MDXRenderer
        frontmatter={data?.mdx?.frontmatter}
      >
          {data?.mdx?.body}
      </MDXRenderer>
    </div>
  </>
)
export default Blog

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        slug
        date
        update
      }
    }
  }
`
