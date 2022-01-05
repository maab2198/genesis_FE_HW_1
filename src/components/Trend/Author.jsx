import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import Avatar from "../UI/Avatar"

import styles from "./Author.module.css"

const Author = ({ author }) => (
  <div className={styles.avatar__container}>
    <Avatar size="small" link={author.name} src={author.avatar} />
    <Link className={styles.author__names} to={`/user/${author.name}`} replace>
      <h3>{author.name}</h3>
      <h4>{author.nickName}</h4>
    </Link>
  </div>
)

Author.propTypes = {
  author: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
  ).isRequired,
}

export default Author
