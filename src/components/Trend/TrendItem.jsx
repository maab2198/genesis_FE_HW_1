import styles from "./TrendItem.module.css"
import Author from "./Author"
import icon from "../../assets/music_icon.png"
import HashtagList from "./HashtagList"
const TrendItem = ({ item, id }) => {
  return (
    <li className={styles["trend-item"]}>
      <div
        className={styles.video__container}
        style={{
          maxWidth: item.videoMeta.width,
          maxHeight: item.videoMeta.height,
        }}
      >
        <img src={item.covers.default} />
        <video
          controls=""
          name="Video Name"
          src={item.videoUrl}
          type="video/mp4"
          video="100%"
          onMouseOver={(event) => event.target.play()}
          onMouseOut={(event) => event.target.pause()}
        ></video>
      </div>
      <div className={styles.info}>
        <Author author={item.authorMeta}></Author>
        <h3>{item.text}</h3>

        <p>
          <img src={icon} width="20px" height="20px" />
          {item.musicMeta.musicName}
        </p>

        <HashtagList hashtags={item.hashtags} />
      </div>
    </li>
  )
}

export default TrendItem
