import React from "react"
import { render, screen } from "@testing-library/react"
import Stats from "./Stats"

const mockStats = {
  followingCount: "100",
  followerCount: "110",
  heartCount: "120",
}

describe("Stats", () => {
  it("render list of 3 paragraph elements with 'stat-element' role", () => {
    render(<Stats stats={mockStats} />)

    expect(screen.queryAllByTestId("stat-element").length).toEqual(3)
  })
  it("render following text", () => {
    render(<Stats stats={mockStats} />)

    expect(screen.queryByText(/following/i)).toBeInTheDocument()
  })
  it("render following count", () => {
    render(<Stats stats={mockStats} />)
    const element = screen.getByTestId("following-count")

    expect(element).toHaveTextContent(mockStats.followingCount)
  })
  it("render followers text", () => {
    render(<Stats stats={mockStats} />)

    expect(screen.queryByText(/followers/i)).toBeInTheDocument()
  })

  it("render followers count", () => {
    render(<Stats stats={mockStats} />)
    const element = screen.getByTestId("follower-count")

    expect(element).toHaveTextContent(mockStats.followerCount)
  })

  it("render likes text", () => {
    render(<Stats stats={mockStats} />)

    expect(screen.queryByText(/likes/i)).toBeTruthy()
  })

  it("render likes count", () => {
    render(<Stats stats={mockStats} />)
    const element = screen.getByTestId("heart-count")

    expect(element).toHaveTextContent(mockStats.heartCount)
  })
})
