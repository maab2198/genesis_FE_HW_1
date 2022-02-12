import React from "react"
import PropTypes from "prop-types"

import styles from "./Avatar.module.css"

import defaultImage from "./avatar.jpg"

const Avatar = ({ link, size, src, name }) => {
  const imgSize = size === "sm" ? "60px" : "120px"

  return (
    <a className="avatar-anchor" href={`/user/${link}`}>
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
    </a>
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
