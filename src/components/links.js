import React from "react"

import { Link } from "gatsby"

const Links = () => (
  <div className="links">
    <Link to="/categories/" className="link">カテゴリ一覧</Link>
    <Link to="/tags/" className="link">タグ一覧</Link>
  </div>
)

export default Links