import React from "react"
import PropTypes from "prop-types"
import styles from "./SectionWrapper.module.css"

const SectionWrapper = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
)

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SectionWrapper
