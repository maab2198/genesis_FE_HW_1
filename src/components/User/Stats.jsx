import React from "react"
import PropTypes from "prop-types"
import styles from "./Stats.module.css"

const Stats = ({ stats }) =>  (
    <div className={styles.stats}>
      <p className={styles["stat-element"]}>
        <span>{stats.followingCount}</span>
        <span className={styles.caption}>Folowing</span>
      </p>
      <p className={styles["stat-element"]}>
        <span>{stats.followerCount}</span>
        <span className={styles.caption}>Folower</span>
      </p>
      <p className={styles["stat-element"]}>
        <span>{stats.heartCount}</span>
        <span className={styles.caption}>Likes</span>
      </p>
    </div>
  )


Stats.propTypes = {
  stats: PropTypes.object.isRequired
}
export default Stats
