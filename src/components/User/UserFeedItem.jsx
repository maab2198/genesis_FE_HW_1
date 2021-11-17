import styles from "./UserFeedItem.module.css"

const UserFeedItem = ({ item }) => {
  return (
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
}

export default UserFeedItem
