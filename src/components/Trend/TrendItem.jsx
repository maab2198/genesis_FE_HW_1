import React from "react"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHeart,
  faShare,
  faComments,
  faMusic,
} from "@fortawesome/free-solid-svg-icons"

import Author from "./Author"
import HashtagList from "./HashtagList"
import Video from "../Video/Video"

import styles from "./TrendItem.module.css"

const TrendItem = ({ item }) => (
  <li className={styles["trend-item"]}>
    <div
      className={styles.video__container}
      style={{
        maxWidth: item.videoMeta.width,
        maxHeight: item.videoMeta.height,
      }}
    >
      <img alt={item.text} src={item.covers.default} />
      <Video videoUrl={item.videoUrl} />
    </div>
    <div className={styles.info}>
      <Author author={item.authorMeta} />
      <h3>{item.text}</h3>

      <p>
        <FontAwesomeIcon icon={faMusic} />
        <span className={styles.caption}>{item.musicMeta.musicName}</span>
      </p>

      {item.hashtags && item.hashtags.lendth && (
        <HashtagList hashtags={item.hashtags} />
      )}

      <div className={styles.stats}>
        <p>
          <FontAwesomeIcon icon={faHeart} />
          <span className={styles.caption}>{item.diggCount}</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faShare} />
          <span className={styles.caption}>{item.shareCount}</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faComments} />
          <span className={styles.caption}>{item.commentCount}</span>
        </p>
      </div>
    </div>
  </li>
)

TrendItem.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.array,
      PropTypes.object,
    ])
  ).isRequired,
}

export default TrendItem
