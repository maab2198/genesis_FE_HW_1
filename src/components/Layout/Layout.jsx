import React from "react"
import PropTypes from "prop-types"

import Theme from "../Theme/Theme"

import styles from "./Layout.module.css"

const Layout = ({ children }) => (
  <Theme>
    <main className={styles.wrapper}>{children}</main>
  </Theme>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
