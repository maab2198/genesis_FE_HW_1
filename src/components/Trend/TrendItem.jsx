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

import styles from "./TrendItem.module.css"
// FIX VIDEO TRACK IMG ALT
const TrendItem = ({ item }) => (
  <li className={styles["trend-item"]}>
    <div
      className={styles.video__container}
      style={{
        maxWidth: item.videoMeta.width,
        maxHeight: item.videoMeta.height,
      }}
    >
      <img alt="djhfb" src={item.covers.default} />
      <video
        controls=""
        name="Video Name"
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
    </div>
    <div className={styles.info}>
      <Author author={item.authorMeta} />
      <h3>{item.text}</h3>

      <p>
        <FontAwesomeIcon icon={faMusic} />
        <span className={styles.caption}>{item.musicMeta.musicName}</span>
      </p>

      <HashtagList hashtags={item.hashtags} />

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
    PropTypes.oneOfType[(PropTypes.string, PropTypes.number)]
  ).isRequired,
}

export default TrendItem
