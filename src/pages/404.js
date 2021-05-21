import React from "react"
import { graphql } from "gatsby"

//import Styles from "../scss/404.module.scss"
import SEO from "../components/seo"

import "../scss/404.scss"

const NotFoundPage = ({ data, location }) => {
  //const siteTitle = data.site.siteMetadata.title

  return (
    <div>
      <SEO />
      <div className="body">Page Not Found</div>
    </div>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
