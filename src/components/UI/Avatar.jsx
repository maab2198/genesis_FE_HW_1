import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styles from "./Avatar.module.css"

const Avatar = ({ link, size, src }) => {
  const imgSize = size === "small" ? "60px" : "120px"

  return (
    <Link className="avatar-anchor" to={`/user/${link}`} replace>
      <span
        className={styles.avatar__wrapper}
        style={{ width: imgSize, height: imgSize }}
      >
        <img
          alt={src}
          src={src}
          className={styles.avatar}
          width={imgSize}
          height={imgSize}
        />
      </span>
    </Link>
  )
}

Avatar.propTypes = {
  link: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}

export default Avatar
