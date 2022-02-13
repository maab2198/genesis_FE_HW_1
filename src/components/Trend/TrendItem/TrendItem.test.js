import React from "react"
import { render, screen } from "@testing-library/react"
import TrendItem from "./TrendItem"

const item = {
  videoMeta: { height: 100, weight: 100 },
  covers: { default: "src" },
  videoUrl: "",
  authorMeta: {},
  text: "some text",
  musicMeta: {musicName: "musicName"},
  hashtags: ["tag1", "tag2"],
  diggCount: 20,
  shareCount: 30,
  commentCount: 100,
}

jest.mock("../../Video/Video", () => () => <div>Video</div>)
jest.mock("../Author/Author", () => () => <div>Author</div>)
jest.mock("../HashtagList/HashtagList", () => () => <div>HashtagList</div>)

describe("TrendItem", () => {
  it("renders item.text", () => {
    const text = item.text
    render(<TrendItem item={item} />)

    expect(screen.queryByText(text)).toBeTruthy()
  })
  it("renders img with item.text as alt ", () => {
    const expectedAlt = item.text

    render(<TrendItem item={item} />)

    expect(screen.queryByAltText(expectedAlt)).toBeTruthy()
  })
  it("renders img  with covers.default as src", () => {
    const expectedSrc = item.covers.default
    render(<TrendItem item={item} />)
    const image = screen.getByRole("img")
   
    expect(image).toHaveAttribute("src",expectedSrc)
  })

})

describe("TrendItem: Components", () => {
  it("renders Video component", () => {
    render(<TrendItem item={item} />)

    expect(screen.queryByText(/Video/i)).toBeTruthy()
  })
  it("renders Author component", () => {
    render(<TrendItem item={item} />)
    expect(screen.queryByText(/Author/i)).toBeTruthy()
  })
  it("renders HashtagList component", () => {
    render(<TrendItem item={item} />)
    expect(screen.queryByText(/HashtagList/i)).toBeTruthy()
  })
  it("not render HashtagList component if hashtags array is empty", () => {
    item.hashtags = []
    render(<TrendItem item={item} />)
    expect(screen.queryByText(/HashtagList/i)).toBeNull()
  })
})


describe("TrendItem: Stats", () => {
  it("renders music name", () => {
    render(<TrendItem item={item} />)
    const element = screen.getByTestId("musicName")

    expect(element).toHaveTextContent(item.musicMeta.musicName)
  })
  it("renders digg (likes) count", () => {
    render(<TrendItem item={item} />)
    const element = screen.getByTestId("diggCount")

    expect(element).toHaveTextContent(item.diggCount)
  })
  it("renders share count", () => {
    render(<TrendItem item={item} />)
    const element = screen.getByTestId("shareCount")

    expect(element).toHaveTextContent(item.shareCount)
  })

  it("renders comment count", () => {
    render(<TrendItem item={item} />)
    const element = screen.getByTestId("commentCount")

    expect(element).toHaveTextContent(item.commentCount)
  })
})
