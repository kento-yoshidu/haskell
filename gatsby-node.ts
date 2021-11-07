import type { GatsbyNode } from "gatsby"

const createPages: GatsbyNode['createPages']  = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.tsx"),
    context: {},
    defer: true,
  })
}

export { createPages }