import * as React from "react"
import { Link } from "gatsby"

import * as Styles from "./style.module.scss"

const Item01 = () => {
  return (
    <div
      className={Styles.box}
      style={{
        "width": "20vw",
        "height": "20vw",
      }}
    >
      <p>#01 Slide up</p>
      <Link
        className={Styles.mask}
        to="/01"
      >
        <p className={Styles.title}>
          Hover me
        </p>
        <p className={Styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        </p>
      </Link>
    </div>
  )
}

export default Item01