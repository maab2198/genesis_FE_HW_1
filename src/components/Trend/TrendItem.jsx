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

const TrendItem = ({
  item: {
    videoMeta,
    covers,
    videoUrl,
    authorMeta,
    text,
    musicMeta,
    hashtags,
    diggCount,
    shareCount,
    commentCount,
  }
}) => (
  <li className={styles["trend-item"]}>
    <div
      className={styles.video__container}
      style={{
        maxWidth: videoMeta.width,
        maxHeight: videoMeta.height,
      }}
    >
      <img alt={text} src={covers.default} />
      <Video videoUrl={videoUrl} />
    </div>
    <div className={styles.info}>
      <Author author={authorMeta} />
      <h3>{text}</h3>

      <p>
        <FontAwesomeIcon icon={faMusic} />
        <span className={styles.caption}>{musicMeta.musicName}</span>
      </p>

      {hashtags && hashtags.length && <HashtagList hashtags={hashtags} />}

      <div className={styles.stats}>
        <p>
          <FontAwesomeIcon icon={faHeart} />
          <span className={styles.caption}>{diggCount}</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faShare} />
          <span className={styles.caption}>{shareCount}</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faComments} />
          <span className={styles.caption}>{commentCount}</span>
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
