import React from "react"
import PropTypes from "prop-types"

import styles from "./UserFeedItem.module.css"

const UserFeedItem = ({ item }) => (
  <li>
    <video
      className={styles.video}
      controls=""
      src={item.videoUrl}
      type="video/mp4"
      video="100%"
      onMouseOver={(event) => event.target.play()}
      onMouseOut={(event) => event.target.pause()}
      onFocus={() => {}}
      onBlur={() => {}}
    >
      <track default kind="captions" srcLang="en" src="SRC" />
    </video>
  </li>
)

UserFeedItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.oneOfType[PropTypes.string]).isRequired,
}

export default UserFeedItem
