import { getTrendingFeed, getUserInfo, getUserFeed } from "./api"
import feed from "../assets/json/mockData/feed.json"
import userInfo from "../assets/json/mockData/user-info.json"
import userFeed from "../assets/json/mockData/feed.json"

const PATH_FEED = "https://elves-34f89-default-rtdb.firebaseio.com/feed.json"
const PATH_USER = "https://elves-34f89-default-rtdb.firebaseio.com/userInfo.json"
const PATH_USER_FEED = "https://elves-34f89-default-rtdb.firebaseio.com/feed.json"

describe("Fetch: Get Trending Feed", () => {
  it("fetch was successful  ", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(feed),
        ok: true,
      })
    )

    const json = await getTrendingFeed()

    expect(Array.isArray(json)).toEqual(true)

    expect(fetchMock).toHaveBeenCalledWith(PATH_FEED)
    expect(json.length).toEqual(feed.length)
  })
  it("fetch works if feed array is empty ", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
        ok: true,
      })
    )

    try {
      const feed = await getTrendingFeed()
    } catch (e) {
      const message = e.message

      expect(message).toContain("empty")
    }
    expect(fetchMock).toHaveBeenCalledWith(PATH_FEED)
  })
  it("fetch was NOT successful (status NOT in the range 200-299) ", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
        ok: false,
      })
    )

    try {
      const feed = await getTrendingFeed()
    } catch (e) {
      const message = e.message

      expect(message).toBeTruthy()
    }
    expect(fetchMock).toHaveBeenCalledWith(PATH_FEED)
  })
})

describe("Fetch: Get User Info", () => {
  it("fetch was successful  ", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(userInfo),
        ok: true,
      })
    )

    const json = await getUserInfo("1")

    expect(json instanceof Object).toEqual(true)

    expect(fetchMock).toHaveBeenCalledWith(PATH_USER)
    expect(json.length).toEqual(userInfo.length)
  })
  it("fetch works if user info object is empty ", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
        ok: true,
      })
    )

    try {
      const user = await getUserInfo("1")
    } catch (e) {
      const message = e.message

      expect(message).toContain("empty")
    }
    expect(fetchMock).toHaveBeenCalledWith(PATH_USER)
  })
  it("fetch was NOT successful (status NOT in the range 200-299) ", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
        ok: false,
      })
    )

    try {
      const user = await getUserInfo("1")
    } catch (e) {
      const message = e.message

      expect(message).toBeTruthy()
    }
    expect(fetchMock).toHaveBeenCalledWith(PATH_USER)
  })
  it("fetch was NOT successful, userId is falsy ", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
        ok: true,
      })
    )

    try {
      const user = await getUserInfo(false)
    } catch (e) {
      const message = e.message

      expect(message).toBeTruthy()
    }
    expect(fetchMock).not.toHaveBeenCalled()
  })

})

describe("Fetch: Get User Feed", () => {
  it("fetch was successful  ", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(userFeed),
        ok: true,
      })
    )

    const json = await getUserFeed("1")

    expect(Array.isArray(json)).toEqual(true)

    expect(fetchMock).toHaveBeenCalledWith(PATH_USER_FEED)
    expect(json.length).toEqual(userFeed.length)
  })
  it("fetch works if feed array is empty ", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
        ok: true,
      })
    )

    try {
      const user = await getUserFeed("1")
    } catch (e) {
      const message = e.message

      expect(message).toContain("empty")
    }
    expect(fetchMock).toHaveBeenCalledWith(PATH_USER_FEED)
  })
// TODO почему or не считаеться как if
  it("fetch works if feed array is undefined ", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(undefined),
        ok: true,
      })
    )

    try {
      const user = await getUserFeed("1")
    } catch (e) {
      const message = e.message

      expect(message).toContain("empty")
    }
    expect(fetchMock).toHaveBeenCalledWith(PATH_USER_FEED)
  })
  it("fetch was NOT successful (status NOT in the range 200-299) ", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
        ok: false,
      })
    )

    try {
      const user = await getUserFeed("1")
    } catch (e) {
      const message = e.message

      expect(message).toBeTruthy()
    }
    expect(fetchMock).toHaveBeenCalledWith(PATH_USER_FEED)
  })
})
