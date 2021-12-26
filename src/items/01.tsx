import { relative } from "path/posix"
import React from "react"

import * as BoxStyles from "../styles/box.module.scss"
import * as Styles from "./style.module.scss"

const Item01 = () => {
  return (
    <div
      className={BoxStyles.box}
      style={{
        "position": "relative",
        "overflow": "hidden",
      }}
    >
      <div className={Styles.mask}>
        this is a mask
      </div>
    </div>
  )
}

export default Item01