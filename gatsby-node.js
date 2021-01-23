const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { resolve } = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {

  /*
   * 
   */
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  const markdowns = await graphql(`
    query {
      allMarkdownRemark(
          sort: {
            fields: [frontmatter___postdate],
            order: DESC
          }
          limit: 1000
        ) {
          group(field: frontmatter___categorySlug) {
            nodes {
              id
              fields {
                slug
              }
              frontmatter {
                categorySlug
              }
            }
          }
        }
    }
  `)

  const group = markdowns.data.allMarkdownRemark.group

  group.forEach((nodes) => {

    nodes.nodes.forEach((node, index) => {

      const previousPostId = index === 0 ? null : nodes.nodes[index - 1].id
      const nextPostId = index === nodes.nodes.length - 1 ? null : nodes.nodes[index + 1].id

      console.log(index,"回目終了")

      createPage({
        path: node.fields.slug,
        component: blogPost,
        context: {
          id: node.id,
          previousPostId,
          nextPostId,
        },
      })
    })


  })

  /*
  ****************************************************************
  */
  // categoryページに関して

  const category = await graphql(
    ` {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              categorySlug
              categoryName
            }
          }
        }
      }
    } `
  )

  category.data.allMarkdownRemark.edges.forEach(({ node }) => {

    createPage({
      path: `category/${node.frontmatter.categorySlug}`,
      component: path.resolve(`./src/templates/category.js`),
      context: {
        category: node.frontmatter.categoryName,
        categoryId: node.frontmatter.categorySlug,
        skip: 0,
        limit: 1000,
        currentPage: 1,
        isFirst: true,
        isLast: true,
      }
    })
  })

  /*
  * tagページ生成
  */

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
