import { render, screen } from "@testing-library/react"
import UserFeed from "./UserFeed"

import useHttp from "../../../hooks/use-http"

jest.mock("./UserFeedItem/UserFeedItem", () => () => <div>item</div>)
jest.mock("../../../hooks/use-http", () => jest.fn())

describe("UserFeed", () => {
  it("render loading spinner", () => {
    useHttp.mockImplementationOnce(() => ({
      sendRequest: () => {},
      error: null,
      status: "pending",
      data: [],
    }))
    render(<UserFeed />)

    expect(screen.getByText(/Loading/i)).toBeTruthy()
  })

  it("render list of items", async () => {
    useHttp.mockImplementationOnce(() => ({
      sendRequest: () => {},
      error: null,
      status: "completed",
      data: [{ id: 1 }, { id: 2 }],
    }))
    render(<UserFeed />)

    expect(await screen.findAllByText(/item/)).toBeTruthy()
  })

  it("render erorr", async () => {
    useHttp.mockImplementationOnce(() => ({
      sendRequest: () => {},
      error: { message: "error text" },
      status: "complited",
      data: [{ id: 1 }, { id: 2 }],
    }))
    render(<UserFeed />)

    expect(await screen.findByText(/error text/)).toBeTruthy()
  })
})
