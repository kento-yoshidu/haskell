const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { resolve } = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {

  const { createPage } = actions

  const queryResult = await graphql(`
    query {
      # グループごとに記事収集
      allArticleByGroup: allMarkdownRemark (
        sort: {
          fields: [frontmatter___postdate],
        }
      ) {
        group(field: frontmatter___categorySlug) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }

      # 全ての記事を収集
      allArticle: allMarkdownRemark {
        nodes {
          id
          fields {
            slug
          }
        }
      }

      # カテゴリごとに記事収集
      articlesByCategory: allMarkdownRemark {
        group(field: frontmatter___categorySlug) {
          fieldValue
          nodes {
            id
            frontmatter {
              categoryName
            }
          }
        }
      }
    }
  `)

  // --------------------------------------------------
  // 各ページの生成

  const groups = queryResult.data.allArticleByGroup.group

  groups.forEach((group) => {

    group.nodes.forEach((node, index) => {

      const previousPostId = index === 0 ? null : group.nodes[index - 1].id
      const nextPostId = index === group.nodes.length - 1 ? null : group.nodes[index + 1].id

      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/blog-post.js"),
        context: {
          id: node.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  })

  // --------------------------------------------------
  // 記事一覧の表示

  const allArticle = queryResult.data.allArticle

  // 記事合計数
  const postCount = allArticle.nodes.length;

  // 何ページ生成することになるかの計算
  const pageCount = Math.ceil(postCount / 6)

  Array.from({ length: pageCount }).forEach((_, i) => {
    createPage({
      path: i === 0 ? "/page/1/" : `/page/${i + 1}/`,
      component: path.resolve("./src/templates/page.js"),
      context: {
        postCount: postCount,
        pageCount: pageCount,
        totalPageCount: pageCount,
        skip: 6 * i,
        limit: 6,
        // 現在のページ番号
        currentPage: i + 1,
        isFirst: i + 1 === 1,
        isLast: i + 1 === pageCount,
      }
    })
  })

  // --------------------------------------------------
  // カテゴリごとの記事一覧(ページネーション付き)

  const articlesByCategory = queryResult.data.articlesByCategory.group

  articlesByCategory.forEach(category => {

    const categorySlug = category.fieldValue;
    const categoryName = category.nodes[0].frontmatter.categoryName;

    // カテゴリごとの記事合計数
    const postCount = category.nodes.length;

    // 何ページ生成することになるかの計算
    const pageCount = Math.ceil(postCount / 6)

    Array.from({ length: pageCount }).forEach((_, i) => {
      createPage({
        path: 1 === 0 ? `/category/${category.fieldValue}/page/1/` : `/category/${category.fieldValue}/page/${i + 1}/`,
        component: path.resolve("./src/templates/category.js"),
        context: {
          postCount: postCount,
          pageCount: pageCount,
          categoryName: categoryName,
          categorySlug: categorySlug,
          skip: 6 * i,
          limit: 6,
          currentPage: i + 1,
          isFirst: i + 1 === 1,
          isLast: i + 1 === pageCount,
        }
      })
    })
  })

  // --------------------------------------------------
  // タグごとの記事一覧

  const tag = await graphql(`
    {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
          nodes {
            id
          }
        }
      }
    }
  `)

  tag.data.allMarkdownRemark.group.map(tag => {

    // タグごとの記事合計数
    const postCount = tag.nodes.length;

    const pageCount = Math.ceil(postCount / 6);

    Array.from({ length: pageCount }).forEach((_, i) => {
      createPage({
        path: 1 === 0 ? `/tag/${tag.fieldValue}/page/1` : `/tag/${tag.fieldValue}/page/${i + 1}`,
        component: path.resolve(`./src/templates/tag.js`),
        context: {
          postCount: postCount,
          pageCount: pageCount,
          tag: tag.fieldValue,
          skip: 6 * i,
          limit: 6,
          currentPage: i + 1,
          isFirst: i + 1 === 1,
          isLast: i + 1 === pageCount,
        }
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
