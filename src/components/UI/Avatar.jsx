import React from "react"
import PropTypes from "prop-types"

import styles from "./Avatar.module.css"

const Avatar = ({ link, size, src }) => {
  const s = size === "small" ? "60px" : "120px"

  return (
    <a className="avatar-anchor" href={"user/" + link}>
      <span className={styles.avatar__wrapper} style={{ width: s, height: s }}>
        <img
          alt = {src}
          loading="lazy"
          src={src}
          className={styles.avatar}
          width={s}
          height={s}
        />
      </span>
    </a>
  )
}


Avatar.propTypes = {
  link: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
}

export default Avatar