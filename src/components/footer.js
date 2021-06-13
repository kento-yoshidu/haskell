import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Footer = () => {

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
          Powered By <Link to={"https://www.gatsbyjs.com/"} target="_blink">Gatsby</Link>
        </h2>
      </hgroup>

      <div className="link external-link">
        <Link
          to={"https://github.com/kento-yoshidu/GatsbyBlog"}
          target="_blink"
        >
          <FontAwesomeIcon icon={faGithubSquare} />
        </Link>
      </div>

      <div className="link internal-link">
        <Link
          to={"/series/"}
          target="_blink"
        >
          <FontAwesomeIcon icon={faChevronRight} />
          シリーズ一覧
        </Link>
        <Link
          to={"/tags/"}
          target="_blink"
        >
          <FontAwesomeIcon icon={faChevronRight} />
          タグ一覧
        </Link>
      </div>

      <div className="link meta-link">
        <Link
          to={"/about/"}
          target="_blink"
        >
          <FontAwesomeIcon icon={faChevronRight} />
          このブログについて
        </Link>

        <Link
          to={"#"}
          target="_blink"
        >
          <FontAwesomeIcon icon={faChevronRight} />
          サイトポリシー
        </Link>

        <Link
          to={"#"}
          target="_blink"
        >
          <FontAwesomeIcon icon={faChevronRight} />
          プライバシーポリシー
        </Link>
      </div>

      <p className="copyright">Copyright @ 2021 toriwatari</p>
    </footer>
  )
}

export default Footer