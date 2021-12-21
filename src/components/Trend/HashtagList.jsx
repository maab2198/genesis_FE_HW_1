import React from "react"
import PropTypes, { object } from "prop-types"

import styles from "./HashtagList.module.css"

const Hashtag = ({ hashtags }) => {
  if (hashtags.length === 0) {
    return null
  }
  return (
    <p>
      {hashtags.map((tag) => (
        <span key={tag.name} className={styles.tag}>
          #{tag.name}{" "}
        </span>
      ))}
    </p>
  )
}

Hashtag.propTypes = {
  hashtags: PropTypes.arrayOf(PropTypes.instanceOf(object)).isRequired,
}

export default Hashtag
