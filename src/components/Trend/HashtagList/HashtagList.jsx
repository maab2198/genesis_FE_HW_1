import React, { useEffect } from "react"
import PropTypes, { object } from "prop-types"

import styles from "./HashtagList.module.css"

const HashtagList = ({ hashtags }) => {
  useEffect(() => {
    console.log(hashtags)
  }, [hashtags])

  if (!hashtags || hashtags.length <= 0 || !hashtags[0]) {
    return null
  }

  return (
    <p>
      {hashtags.map((tag) => (
        <span key={tag.id} className={styles.tag}>
          #{tag.name}{" "}
        </span>
      ))}
    </p>
  )
}

HashtagList.defaultProps = {
  hashtags: [{}],
}

HashtagList.propTypes = {
  hashtags: PropTypes.arrayOf(PropTypes.instanceOf(object)),
}

export default HashtagList
