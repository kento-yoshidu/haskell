import React from "react"

import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faTags } from "@fortawesome/free-solid-svg-icons"

const Links = () => (
  <div className="links">
    <Link to="/categories/" className="link">
      <FontAwesomeIcon icon={faFolder} /> カテゴリ一覧
    </Link>

    <Link to="/tags/" className="link">
      <FontAwesomeIcon icon={faTags} /> タグ一覧
    </Link>
  </div>
)

export default Links