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

  return (
    <div>
      <SEO
        title={siteData.siteMetadata.title}
      />

      <Header
        headerTitle={siteData.siteMetadata.title}
        pageTitle="このブログについて"
        isTopPage={ false }
      />

      <main className="main aboutMain">
        <section>
          <h2>このブログは何なのか</h2>
          <p>このブログは<a href="https://github.com/kento-yoshidu">私</a>の個人ブログです。自称ITエンジニアですので、技術をアウトプットできる空間、そして転職時のポートフォリオになればいいと思い作成しました。</p>
          <p>このブログはGatsbyという静的サイトジェネレータを使用して作成しました。Githubのリポジトリは<a href="https://github.com/kento-yoshidu/GatsbyBlog" target="_blink">こちら</a>です。</p>
        </section>

        <section>
          <h2>何を書いているのか</h2>
          <p>基本的にIT、プログラミングに関することを書いています。私はWeb開発への転職を目指していますので、HTMLやCSS、JavaScriptの記事が多めです。</p>
          <p>あと、日記代わりにも使いたいと思います。</p>

          <h3>カテゴリ分けしています</h3>
          <p>単発で終わるような記事ではなく、シリーズ化した一連の記事をたくさん書きたいと思っています。そのため、記事ごとにカテゴリ分類を設けました。</p>
        </section>

        <section>
          <h2>このブログのモットー</h2>
          <h3>最小構成</h3>
          <p>技術を説明するにあたり、その環境はできる限りの最小構成を目指します。</p>
          <p>「Node.jsからMongoDBへの接続方法を紹介します」という解説ページがあったとして、「MongoDBはDockerで用意します」だとDockerがわからない人はその時点で躓きますよね<span class="emoji">🙀</span></p>
          <p>私自身そういうことに多く遭遇したので、私はできるだけシンプルな環境で「とにかく一つのことだけに集中して理解する」場を作りたいです。</p>

          <h3>スモールステップ</h3>
          <p>目標は細かく、小さく設定します。</p>

          <h3>無意味なイメージ画像を載せない</h3>

          <h3>「いかがでしたか？」と書かない</h3>
          <p>すみません、他のブログを批判しているつもりはありません。かといって出来た人間でもありませんが。</p>
          <p>ほなこの辺りで...。</p>
        </section>
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
