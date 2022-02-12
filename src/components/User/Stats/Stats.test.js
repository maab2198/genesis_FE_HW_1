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
        const { getAllByRole } = render(<Stats stats={mockStats} />)
    
        expect(getAllByRole("stat-element").length).toEqual(3)
      })
  it("render following text", () => {
    const { getByText } = render(<Stats stats={mockStats} />)

    expect(getByText(/following/i)).toBeInTheDocument()
  })
  it("render following count", () => {
    const { getByTestId } = render(<Stats stats={mockStats} />)

    expect(getByTestId("following-count")).toHaveTextContent(mockStats.followingCount)
  })
  it("render followers text", () => {
    const { getByText } = render(<Stats stats={mockStats} />)

    expect(getByText(/followers/i)).toBeInTheDocument()
  })

  it("render followers count", () => {
    const { getByTestId} = render(<Stats stats={mockStats} />)

    expect(getByTestId("follower-count")).toHaveTextContent(mockStats.followerCount)
  })

  it("render likes text", () => {
    const { getByText } = render(<Stats stats={mockStats} />)

    expect(getByText(/likes/i)).toBeTruthy()
  })

  it("render likes count", () => {
    const { getByTestId } = render(<Stats stats={mockStats} />)

    expect(getByTestId("heart-count")).toHaveTextContent(mockStats.heartCount)
  })


})
