import feed from "../assets/json/mockData/feed.json"
import userInfo from "../assets/json/mockData/user-info.json"
const TESTMODE = false
/*
config for rapidapi
const PATH = "https://tiktok33.p.rapidapi.com"

const HEADERS = {
  "x-rapidapi-host": "tiktok33.p.rapidapi.com",
  "x-rapidapi-key": "e354906d46mshe8a86828f615be6p15a959jsn223d667b7313",
}
*/

const PATH_FEED = "https://elves-34f89-default-rtdb.firebaseio.com/feed.json"
const PATH_USER =
  "https://elves-34f89-default-rtdb.firebaseio.com/userInfo.json"
const PATH_USER_FEED = "https://elves-34f89-default-rtdb.firebaseio.com/feed.json"

export async function getTrendingFeed() {
  let trendingFeed

    const response = await fetch(PATH_FEED)

    trendingFeed = await response.json()

    if (!response.ok) {
      throw new Error(trendingFeed.message || "Could not fetch trending feed.")
    }

    if (!trendingFeed || !trendingFeed.length) {
      throw new Error("Feed is empty")
    }
  
  return trendingFeed
}

export async function getUserInfo(userId) {
  if (!userId) {
    throw new Error("UserId not valid")
  }
  let userData

    const response = await fetch(PATH_USER)
    userData = await response.json()

    if (!response.ok) {
      throw new Error(userData.message || "Could not fetch user info.")
    }

    if (!userData || !userData.user || !userData.stats) {
      throw new Error("User info is empty")
    }

  return userData
}

export async function getUserFeed(userId) {
  const response = await fetch(PATH_USER_FEED)

  const userFeed = await response.json()

  if (!response.ok) {
    throw new Error(userFeed.message || "Could not fetch user feed.")
  }

  if (!userFeed || !userFeed.length) {
    throw new Error("Feed is empty")
  }
  return userFeed
}
