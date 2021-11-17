import { Fragment, useEffect } from "react"
import Stats from "./Stats"
import styles from "./UserInfo.module.css"
import LoadingSpinner from "../../components/UI/LoadingSpinner"
import useHttp from "../../hooks/use-http"
import { getUserInfo } from "../../lib/api"
import { Avatar } from "../UI/Avatar"

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
    return <h2>{error.message}</h2>
  }

  if (!userInfo) {
    return <h2>Please reload the page, something went wrong</h2>
  }
  return (
    <Fragment>
      <section className={styles.info}>
        <Stats stats={userInfo.stats} />

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
    </Fragment>
  )
}

export default UserInfo
