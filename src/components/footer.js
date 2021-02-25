import React from "react"
import { Link, useStaticQuery, graphql, useScrollRestoration } from "gatsby"


const Footer = ({}) => {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            subTitle
            siteUrl
            author {
              name
            }
          }
        }
      }
    `
  )

  return (
    <footer className="footer">
      <hgroup>
        <h1>
          <Link to={ site.siteMetadata.siteUrl }>
            { site.siteMetadata.title}
          </Link>
        </h1>
        <h2>
          { site.siteMetadata.subTitle }
        </h2>
      </hgroup>

      <p>jgapjrpajg</p>
      <p>jgapjrpajg</p>
      <p>jgapjrpajg</p>
      <p>jgapjrpajg</p>
      <p>jgapjrpajg</p>
      <p>jgapjrpajg</p>
      <p>jgapjrpajg</p>
      <p>jgapjrpajg</p>
      <p>jgapjrpajg</p>
      <p>jgapjrpajg</p>
    </footer>
  )
}

export default Footer