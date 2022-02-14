import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import Avatar from "../../UI/Avatar/Avatar"

import styles from "./Author.module.css"

const Author = ({ author:{name,avatar,nickName} }) => (
  <div className={styles.avatar__container}>
    <Avatar
      size="sm"
      link={name}
      name={name}
      src={avatar}
    />
    <Link className={styles.author__names} to={`/user/${name}`} replace>
      <h3>{name}</h3>
      <h4>{nickName}</h4>
    </Link>
  </div>
)

Author.propTypes = {
  author: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
  ).isRequired,
}

export default Author
