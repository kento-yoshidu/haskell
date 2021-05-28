import React from "react"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

const NotFoundPage = ({ data, location }) => {

  const siteData = data.siteData

  return (
    <div>
      <SEO
        title="hoge"
      />
      
      <Header
        headerTitle={siteData.siteMetadata.title}
        pageTitle="404 Page Not Found"
        isTopPage={ false }
      />

      <main className="main aboutMain">
        <section>
          <h3>ページが見つかりません。</h3>
          <p>ページが削除された、もしくは移動した可能性があります。<Link to={`/`}>トップページ</Link>に戻り、改めてお探しください。</p>
          <p>また、<Link to={`/categories/`}>カテゴリ一覧ページ</Link>や<Link to={`/tags/`}>タグ一覧ページ</Link>も用意してあります。こちらからの方が探しやすいかもしれません。</p>
        </section>
      </main>

      <Footer />
    </div>
  )
}


export default NotFoundPage

export const pageQuery = graphql`
  query {
    siteData: site {
      siteMetadata {
        title
      }
    }
  }
`
