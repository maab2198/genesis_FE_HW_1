import React from "react"
import PropTypes from "prop-types"

import styles from "./Stats.module.css"

const Stats = ({ stats: { followerCount, followingCount, heartCount } }) => (
  <div className={styles.stats}>
    <p role="stat-element" className={styles["stat-element"]}>
      <span data-testid="following-count">{followingCount}</span>
      <span className={styles.caption}>Following</span>
    </p>
    <p role="stat-element" className={styles["stat-element"]}>
      <span data-testid="follower-count">{followerCount}</span>
      <span className={styles.caption}>Followers</span>
    </p>
    <p role="stat-element" className={styles["stat-element"]}>
      <span data-testid="heart-count">{heartCount}</span>
      <span className={styles.caption}>Likes</span>
    </p>
  </div>
)

Stats.propTypes = {
  stats: PropTypes.objectOf(
    PropTypes.oneOfType[(PropTypes.string, PropTypes.number)]
  ).isRequired,
}
export default Stats
