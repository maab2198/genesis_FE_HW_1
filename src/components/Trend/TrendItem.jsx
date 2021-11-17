import styles from "./TrendItem.module.css"
import Author from "./Author"

const TrendItem = ({ item, id }) => {
  // const [imgOnHover, setImgOnHover] = useState(false);
  // const price = `$${props.price.toFixed(2)}`;
  // const cartCtx = useContext(CartContext);

  // const addToCartHandler = (enteredAmount) => {
  //   cartCtx.addItem({
  //     amount: enteredAmount,
  //     id: props.id,
  //     price: props.price,
  //     name: props.eng_name,
  //   });
  // };

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
          controls="controls"
          name="Video Name"
          src={item.videoUrl}
          type="video/mp4"
          video="100%"
        ></video>
      </div>
      <div className={styles.info}>
        <Author author={item.authorMeta}></Author>

        <h3>{item.text}</h3>
        <p>{item.musicMeta.musicName}</p>
        <p>#tag #tag3</p>
      </div>
    </li>
  )
}

export default TrendItem
