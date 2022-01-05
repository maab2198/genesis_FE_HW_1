import React, { useEffect } from "react"
import PropTypes from "prop-types"

import useHttp from "../../hooks/use-http"
import { getUserInfo } from "../../lib/api"

import LoadingSpinner from "../UI/LoadingSpinner"
import Stats from "./Stats"
import Avatar from "../UI/Avatar"
import Error from "../UI/Error"

import styles from "./UserInfo.module.css"

const UserInfo = ({ userId }) => {
  const {
    sendRequest,
    status,
    data: userInfo,
    error,
  } = useHttp(getUserInfo, true)

  useEffect(() => {
    sendRequest(userId)
  }, [userId, sendRequest])

  if (status === "pending") {
    return <LoadingSpinner />
  }

  if (error) {
    return <Error message={error.message} />
  }

  return (
    <>
      <section className={styles.info}>
        {userInfo.stats && <Stats stats={userInfo.stats} />}

        <div className={styles.avatar__container}>
          <Avatar size="med" src={userInfo.user.avatarMedium} link={userId} />
        </div>

        <div className={styles.btn__container}>
          <button className="btn" type="button">
            Follow
          </button>
        </div>
      </section>
      <section className={styles.desc}>
        <h1>{userInfo.user.nickname}</h1>
        <pre>{userInfo.user.signature}</pre>
      </section>
    </>
  )
}

UserInfo.propTypes = {
  userId: PropTypes.string.isRequired,
}

export default UserInfo
