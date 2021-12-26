import React, { useEffect } from "react"

import styles from "./UserFeed.module.css"

import useHttp from "../../hooks/use-http"
import { getTrendingFeed } from "../../lib/api"

import UserFeedItem from "./UserFeedItem"
import Error from "../UI/Error"

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
        !error &&
        userFeed.map((item) => <UserFeedItem item={item} key={item.id} />)}
    </ul>
  )
}

export default UserFeed
