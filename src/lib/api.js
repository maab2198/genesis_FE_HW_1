const { REACT_APP_FEED, REACT_APP_USER_INFO, REACT_APP_USER_FEED } = process.env

export async function getTrendingFeed() {
  const response = await fetch(REACT_APP_FEED)

  const trendingFeed = await response.json()

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

  const response = await fetch(REACT_APP_USER_INFO)
  const userData = await response.json()

  if (!response.ok) {
    throw new Error(userData.message || "Could not fetch user info.")
  }

  if (!userData || !userData.user || !userData.stats) {
    throw new Error("User info is empty")
  }

  return userData
}

export async function getUserFeed(userId) {
  if (!userId) {
    throw new Error("UserId not valid")
  }

  const response = await fetch(REACT_APP_USER_FEED)

  const userFeed = await response.json()

  if (!response.ok) {
    throw new Error(userFeed.message || "Could not fetch user feed.")
  }

  if (!userFeed || !userFeed.length) {
    throw new Error("Feed is empty")
  }
  return userFeed
}
