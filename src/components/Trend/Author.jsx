import React from "react"
import PropTypes from "prop-types"
import Link from "react-router-dom"
import Avatar from "../UI/Avatar"

import styles from "./Author.module.css"

const Author = ({ author }) => (
  <div className={styles.avatar__container}>
    <Avatar size="small" link={author.name} src={author.avatar} />
    <Link className={styles.author_names} to={`user/${author.name}`}>
      <h3 className="tiktok">{author.name}</h3>
      <h4 className="tiktok">{author.nickName}</h4>
    </Link>
  </div>
)

Author.propTypes = {
  author: PropTypes.objectOf(PropTypes.oneOfType[PropTypes.string]).isRequired,
}

export default Author
