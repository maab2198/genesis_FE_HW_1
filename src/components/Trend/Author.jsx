import React from "react"
import PropTypes from "prop-types"
import Avatar  from "../UI/Avatar"
import styles from "./Author.module.css"


const Author = ({ author }) => (
    <div className={styles.avatar__container}>
      <Avatar size="small" link={author.name} src={author.avatar} />
      <a className={styles.author_names} href={"user/" + author.name}>
        <h3 className="tiktok">{author.name}</h3>
        <h4 className="tiktok">{author.nickName}</h4>
      </a>
    </div>
  )

Author.propTypes = {
  author: PropTypes.object.isRequired
}

export default Author
