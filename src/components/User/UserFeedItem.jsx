import React from "react"
import PropTypes from "prop-types"

import styles from "./UserFeedItem.module.css"
// VIDEO
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
      ></video>
    </li>
  )


UserFeedItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default UserFeedItem
