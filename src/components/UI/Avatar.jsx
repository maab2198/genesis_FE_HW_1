import React from "react"
import PropTypes from "prop-types"
import Link from "react-router-dom"
import styles from "./Avatar.module.css"

const Avatar = ({ link, size, src }) => {
  const s = size === "small" ? "60px" : "120px"

  return (
    <Link className="avatar-anchor" to={`user/${link}`}>
      <span className={styles.avatar__wrapper} style={{ width: s, height: s }}>
        <img
          alt={src}
          loading="lazy"
          src={src}
          className={styles.avatar}
          width={s}
          height={s}
        />
      </span>
    </Link>
  )
}

Avatar.propTypes = {
  link: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
}

export default Avatar
