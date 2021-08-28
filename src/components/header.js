import React from "react"

import * as Styles from "../styles/_header.module.scss"

export const Header = ({message}) => (
	<header className={Styles.header}>
		{message}
	</header>
)

export default Header
