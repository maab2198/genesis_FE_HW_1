import React, { useEffect } from "react"

import useHttp from "../../../hooks/use-http"
import { getTrendingFeed } from "../../../lib/api"

import UserFeedItem from "./UserFeedItem/UserFeedItem"
import Error from "../../UI/Error/Error"

import styles from "./UserFeed.module.css"

const UserFeed = () => {
  const {
    sendRequest,
    status,
    error,
    data: userFeed,
  } = useHttp(getTrendingFeed, true)

  useEffect(() => {
    sendRequest()
  }, [sendRequest])

  if (error) {
    return <Error message={error.message} />
  }

  return (
    <ul className={styles.grid}>
      {status !== "pending" &&
        userFeed.map((item) => <UserFeedItem item={item} key={item.id} />)}
      {status == "pending" && <h2>Loading ....</h2>}
    </ul>
  )
}

export default UserFeed
