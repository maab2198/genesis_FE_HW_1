import React, { useEffect } from "react"

import TrendItem from "./TrendItem"
import LoadingSpinner from "../UI/LoadingSpinner"
import styles from "./TrendList.module.css"
import useHttp from "../../hooks/use-http"
import Error from "../UI/Error"

import { getTrendingFeed } from "../../lib/api"

const TrendList = () => {
  const {
    sendRequest,
    status,
    data: trendingFeed,
    error,
  } = useHttp(getTrendingFeed, true)

  useEffect(() => {
    sendRequest()
  }, [sendRequest])

  if (status === "pending") {
    return <LoadingSpinner />
  }

  if (error) {
    return <Error message={error.message} />
  }

  return (
    <div>


      <ul className={styles.trend}>
        {
          !error &&
          trendingFeed.map((item) => (
            <TrendItem key={item.id}  item={item} />
          ))}
      </ul>
    </div>
  )
}

export default TrendList
