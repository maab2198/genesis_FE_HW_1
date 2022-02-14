import feed from "../assets/json/mockData/feed.json"
import * as userInfo from "../assets/json/mockData/user-info.json"

const PATH = "https://tiktok33.p.rapidapi.com"
const TESTMODE = false
const HEADERS = {
  "x-rapidapi-host": "tiktok33.p.rapidapi.com",
  "x-rapidapi-key": "e354906d46mshe8a86828f615be6p15a959jsn223d667b7313",
}

const PATH_FEED = "https://elves-34f89-default-rtdb.firebaseio.com/feed.json"
const PATH_USER =
  "https://elves-34f89-default-rtdb.firebaseio.com/userInfo.json"

export async function getTrendingFeed() {
  let trendingFeed
  if (!TESTMODE) {
    const response = await fetch(PATH_FEED, {
      // headers: HEADERS,
    })

    trendingFeed = await response.json()

    if (!response.ok) {
      throw new Error(trendingFeed.message || "Could not fetch trending feed.")
    }

    if (!trendingFeed || !trendingFeed.length) {
      throw new Error("Feed is empty")
    }
  } else {
    trendingFeed = feed
  }
  console.log(trendingFeed)
  return trendingFeed
}

export async function getUserInfo(userId) {
  if (!userId) {
    throw new Error("UserId not valid")
  }
  let userData
  if (!TESTMODE) {
    const response = await fetch(PATH_USER, {
      // headers: HEADERS,
    })
    userData = await response.json()

    if (!response.ok) {
      throw new Error(userData.message || "Could not fetch user info.")
    }

    if (!userData || !userData.user || !userData.stats) {
      throw new Error("User info is empty")
    }
  } else {
    userData = userInfo
  }
  return userData
}

export async function getUserFeed(userId) {
  const response = await fetch(`${PATH}/user/feed/${userId}`, {
    headers: HEADERS,
  })

  const userFeed = await response.json()

  if (!response.ok) {
    throw new Error(userFeed.message || "Could not fetch user feed.")
  }

  if (!userFeed) {
    throw new Error("Feed is empty")
  }
  return userFeed
}
