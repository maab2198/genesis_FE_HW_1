import React, { Fragment } from "react"
import styles from "./HashtagList.module.css"
const Hashtag = ({ hashtags }) => {
  console.log(hashtags)
  if (hashtags.length === 0) {
    return null
  }
  return (
    <Fragment>
      <p>
        {hashtags.map((tag, id) => (
          <span key={id} className={styles.tag}>
            #{tag.name}{" "}
          </span>
        ))}
      </p>
    </Fragment>
  )
}

export default Hashtag
