import React from "react"
import { render, screen } from "@testing-library/react"
import UserFeedItem from "./UserFeedItem"

const defaultUrl =
  "https://www.tiktok.com/@tiktok/video/7039055257044815110?is_from_webapp=1&sender_device=pc&web_id7046037117986915845"

jest.mock("../../../Video/Video", () => () => <div>{defaultUrl}</div>)

describe("UserFeedItem", () => {
  it("renders Video component if item is not set", () => {
    render(<UserFeedItem />)

    expect(screen.queryByText(defaultUrl)).toBeInTheDocument()
  })
})
