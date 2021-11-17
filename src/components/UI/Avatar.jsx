import React from "react"
import styles from "./Avatar.module.css"

export const Avatar = ({ link, size, src }) => {
  let s = size === "small" ? "60px" : "120px"

  return (
    <a className="avatar-anchor" href={"user/" + link}>
      <span className={styles.avatar__wrapper} style={{ width: s, height: s }}>
        <img
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
