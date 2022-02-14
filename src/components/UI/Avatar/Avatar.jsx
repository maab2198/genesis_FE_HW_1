import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import styles from "./Avatar.module.css"

import defaultImage from "./avatar.jpg"


const Avatar = ({ link, size, src, name }) => {
  const imgSize = size === "sm" ? "60px" : "120px"

  return (
    <Link className="avatar-anchor" to={`/user/${link}`} replace>
      <span
        className={styles.avatar__wrapper}
        style={{ width: imgSize, height: imgSize }}
      >
        <img
          alt={name}
          src={src || defaultImage}
          className={styles.avatar}
          width={imgSize}
          height={imgSize}
        />
      </span>
    </Link>
  )
}

Avatar.defaultProps = {
  link: "#",
  size: "sm",
  src: defaultImage,
  name: "name",
}

Avatar.propTypes = {
  link: PropTypes.string,
  size: PropTypes.string,
  src: PropTypes.string,
  name: PropTypes.string,
}

export default Avatar
