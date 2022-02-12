import React from "react"
import PropTypes from "prop-types"

import Video from "../../../Video/Video"


const UserFeedItem = ({ item }) => (
  <li>
    <Video videoUrl={item.videoUrl}/>
  </li>
)

UserFeedItem.deful = {
  item: {
    videoUrl: "https://www.tiktok.com/@tiktok/video/7039055257044815110?is_from_webapp=1&sender_device=pc&web_id7046037117986915845"
  }
}

UserFeedItem.defaultProps  = {
  item: PropTypes.objectOf(PropTypes.oneOfType[PropTypes.string]),
}

export default UserFeedItem
