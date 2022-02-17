import React, { useEffect } from "react"

import TrendItem from "../TrendItem/TrendItem"
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner"
import Error from "../../UI/Error/Error"

import useHttp from "../../../hooks/use-http"

import { getTrendingFeed } from "../../../lib/api"

import styles from "./TrendList.module.css"

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
        {!error &&
          trendingFeed.map((item) => <TrendItem key={item.id} item={item} />)}
      </ul>
    </div>
  )
}

export default TrendList
