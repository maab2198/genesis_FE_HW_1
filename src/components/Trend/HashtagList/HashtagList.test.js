import React from "react"
import { render, screen } from "@testing-library/react"
import HashtagList from "./HashtagList"

const mockHashtags = [
  {
    id: "1",
    name: "tag1",
  },
  {
    id: "2",
    name: "tag2",
  },
]

describe("HashtagList", () => {
  it("render noting if list is empty", () => {
    const { container } = render(<HashtagList hashtags={[]} />)

    expect(container.firstChild).not.toBeInTheDocument()
  })

  it("render list of spans with tag className and #name as text", () => {
    const { container } = render(<HashtagList hashtags={mockHashtags} />)
    expect(screen.queryByText("#" + mockHashtags[0].name)).toBeInTheDocument()
    expect(screen.queryByText("#" + mockHashtags[1].name)).toBeInTheDocument()

    expect(container.querySelectorAll("span.tag").length).toEqual(
      mockHashtags.length
    )
  })
})
