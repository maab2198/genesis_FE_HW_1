import React, { useEffect } from "react"

import TrendItem from "./TrendItem"
import LoadingSpinner from "../UI/LoadingSpinner"
import styles from "./TrendList.module.css"
import useHttp from "../../hooks/use-http"

import { getTrendingFeed } from "../../lib/api"
// ERROR CLASSNaME
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

  return (
    <div>
      {error && <h1 className="a">{error.message}</h1>}

      <ul className={styles.trend}>
        {status !== "pending" &&
          !error &&
          trendingFeed.map((item) => (
            <TrendItem key={item.id} id={item.id} item={item} />
          ))}
      </ul>
    </div>
  )
}

export default TrendList
