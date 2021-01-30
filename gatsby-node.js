const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { resolve } = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {

  const { createPage } = actions

  // 各記事ページの生成

  const markdowns = await graphql(`
    query {
      allMarkdownRemark(
          sort: {
            fields: [frontmatter___postdate],
          }
          limit: 1000
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
    }
  `)

  // グループごとに記事取得
  const groups = markdowns.data.allMarkdownRemark.group

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

  // 記事一覧(ページネーション付き)

  const allposts = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
          id
          frontmatter {
            categoryName
            categorySlug
            tags
            title
            postdate(difference: "")
            updatedate(formatString: "", fromNow: false, locale: "")
          }
        }
      }
    }
  `)

  // 記事合計数
  const blogPosts = allposts.data.allMarkdownRemark.nodes.length;

  // 1ページに表示する記事数
  const blogPostsPerPage = 6;

  // 何ページ生成することになるかの計算
  const Pages = Math.ceil(blogPosts / blogPostsPerPage)

  Array.from({ length: Pages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? "/page/1/" : `/page/${i + 1}/`,
      component: path.resolve("./src/templates/page.js"),
      context: {
        skip: blogPostsPerPage * i,
        limit: blogPostsPerPage,
        // 現在のページ番号
        currentPage: i + 1,
        isFirst: i + 1 === 1,
        isLast: i + 1 === Pages,
      }
    })
  })

  const category = await graphql(`
    {
      allMarkdownRemark {
        group(field: frontmatter___categorySlug) {
          nodes {
            frontmatter {
              categoryName
              categorySlug
              title
            }
          }
          fieldValue
        }
      }
    }
  `)

  category.data.allMarkdownRemark.group.map(category => {

    // カテゴリごとの記事合計数
    const blogPosts = category.nodes.length;

    // 何ページ生成することになるかの計算
    const Pages = Math.ceil(blogPosts / blogPostsPerPage)

    console.log(category.nodes[0].frontmatter.categorySlug)

    Array.from({ length: Pages}).forEach((_, i) => {
      createPage({
        path: 1 === 0 ? `/category/${category.fieldValue}/` : `/category/${category.fieldValue}/page/${i + 1}/`,
        component: path.resolve("./src/templates/category.js"),
        context: {
          category: category.nodes[0].frontmatter.categoryName,
          categoryId: category.nodes[0].frontmatter.categorySlug,
          skip: blogPostsPerPage * i,
          limit: blogPostsPerPage,
          currentPage: i + 1,
          isFirst: i + 1 === 1,
          isLast: i + 1 === Pages,
        }
      })
    })
  })

  // tagページ生成

  const tag = await graphql(`
    {
      tagsGroup: allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  tag.data.tagsGroup.group.map(tag => {

    createPage({
      path: `tag/${tag.fieldValue}`,
      component: path.resolve(`./src/templates/tag.js`),
      context: {
        tag: tag.fieldValue
      }
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
