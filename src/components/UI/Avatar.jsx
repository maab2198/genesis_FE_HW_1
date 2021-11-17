import React from "react"
import styles from "./Avatar.module.css"

export const Avatar = ({ author }) => {
  return (
    <div className={styles.avatar__container}>
      <a
        className="avatar-anchor tiktok-1tizhk9 e1eulw5o4"
        href={"/@" + author.name}
      >
        <span className={styles.avatar__wrapper}>
          <img loading="lazy" src={author.avatar} className={styles.avatar} />
        </span>
      </a>
      <a className="tiktok" href={"/@" + author.name}>
        <h3 className="tiktok">{author.name}</h3>
        <h4 className="tiktok">{author.nickName}</h4>
      </a>
    </div>
  )
}
