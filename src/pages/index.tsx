import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ location }) => (
  <Layout
    location={location}
  >
    <Seo title="Home" />
    
    <Link to="test">
      Test
    </Link>
  </Layout>
)

export default IndexPage
