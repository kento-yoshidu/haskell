import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faClock, faUndo, faTags } from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const AboutPage = ({ data, location }) => {

  const siteData = data.siteData;
  const postData = data.postData;

  return (
    <div>
      <SEO
        title={siteData.siteMetadata.title }
      />

      <Header
        headerTitle={ siteData.siteMetadata.title}
        pageTitle="記事一覧"
        isTopPage={ false }
      />

      <main className="main">
        about
      </main>

      <Footer />
    </div>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    siteData: site {
      siteMetadata {
        title
      }
    }
  }
`
