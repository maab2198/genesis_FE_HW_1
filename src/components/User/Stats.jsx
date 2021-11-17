import styles from "./Stats.module.css"
const Stats = ({ stats }) => {
  return (
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
}

export default Stats
