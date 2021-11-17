import React from "react"
import styles from "./Author.module.css"
import { Avatar } from "../UI/Avatar"

const Author = ({ author }) => {
  return (
    <div className={styles.avatar__container}>
      <Avatar size="small" link={author.name} src={author.avatar} />
      <a className={styles.author_names} href={"user/" + author.name}>
        <h3 className="tiktok">{author.name}</h3>
        <h4 className="tiktok">{author.nickName}</h4>
      </a>
    </div>
  )
}

export default Author
