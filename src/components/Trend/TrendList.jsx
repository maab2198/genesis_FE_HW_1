import { useState, useEffect } from "react"
import TrendItem from "./TrendItem"
import styles from "./TrendList.module.css"

const TrendList = () => {
  const [feed, setFeed] = useState([])
  const [loading, setIsLoading] = useState(true)
  const [error, setIsError] = useState(false)

  const fetchFeedHandler = async () => {
    const response = await fetch(
      "https://tiktok33.p.rapidapi.com/trending/feed",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "tiktok33.p.rapidapi.com",
          "x-rapidapi-key":
            "c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66",
        },
      }
    )

    // .then(response => {
    // 	console.log(response);
    // })
    // .catch(err => {
    // 	console.error(err);
    // });

    if (!response.ok) {
      throw new Error("Something went wrong((")
    }

    const data = await response.json()

    if (data) {
      // const loadedProducts = Object.entries(data);
      setFeed(data)
    } else {
      throw new Error("No feed is empty")
    }

    setIsLoading(false)
  }

  useEffect(() => {
    fetchFeedHandler().catch((e) => {
      setIsError(e.message)
      setIsLoading(false)
      console.error(e.name + ": " + e.message)
    })
    //console.log(feed)
  }, [])

  return (
    <div>
      {loading && <h1 className={"a"}>Loading...</h1>}
      {error && <h1 className={"a"}>{error}</h1>}

      <ul className={styles.trend}>
        {!loading &&
          !error &&
          feed.map((item) => (
            <TrendItem key={item.id} id={item.id} item={item} />
          ))}
      </ul>
    </div>
  )
}

export default TrendList
