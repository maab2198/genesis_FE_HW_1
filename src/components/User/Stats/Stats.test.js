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
    
        expect(screen.getAllByRole("stat-element").length).toEqual(3)
      })
  it("render following text", () => {
   render(<Stats stats={mockStats} />)

    expect(screen.getByText(/following/i)).toBeInTheDocument()
  })
  it("render following count", () => {
    render(<Stats stats={mockStats} />)

    expect(screen.getByTestId("following-count")).toHaveTextContent(mockStats.followingCount)
  })
  it("render followers text", () => {
   render(<Stats stats={mockStats} />)

    expect(screen.getByText(/followers/i)).toBeInTheDocument()
  })

  it("render followers count", () => {
    render(<Stats stats={mockStats} />)

    expect(screen.getByTestId("follower-count")).toHaveTextContent(mockStats.followerCount)
  })

  it("render likes text", () => {
    render(<Stats stats={mockStats} />)

    expect(screen.getByText(/likes/i)).toBeTruthy()
  })

  it("render likes count", () => {
    render(<Stats stats={mockStats} />)

    expect(screen.getByTestId("heart-count")).toHaveTextContent(mockStats.heartCount)
  })


})
