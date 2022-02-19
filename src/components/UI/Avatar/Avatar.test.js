import React from "react"
import { render, screen } from "@testing-library/react"
import Avatar from "./Avatar"
import { MemoryRouter } from "react-router-dom"

describe("Avatar", () => {
  it("img alt value set from props", () => {
    render(
      <MemoryRouter>
        <Avatar name="alt_value" />
      </MemoryRouter>
    )

    expect(screen.queryByAltText(/alt/i)).toBeInTheDocument()
  })

  it("link href set from props", () => {
    const testValue = "userId"

    render(
      <MemoryRouter>
        <Avatar link={testValue} />
      </MemoryRouter>
    )

    const linkElement = screen.getByRole("link")
    expect(linkElement).toHaveAttribute("href", `/user/${testValue}`)
  })

  it("render correct src", async () => {
    const expectedSource = "src"

    render(
      <MemoryRouter>
        <Avatar src={expectedSource} name="alt" />{" "}
      </MemoryRouter>
    )

    const imgElement = screen.getByRole("img")

    expect(imgElement).toHaveAttribute("src", expectedSource)
  })

  it("render default image if src is empty", async () => {
    render(
      <MemoryRouter>
        <Avatar src="" name="alt" />{" "}
      </MemoryRouter>
    )

    const imgElement = screen.getByRole("img")

    expect(imgElement).toHaveAttribute("src", "avatar.jpg")
  })

  it("render image with width 60px ", () => {
    const expectedWidth = "60px"

    render(
      <MemoryRouter>
        <Avatar size="sm" name="alt_value" />
      </MemoryRouter>
    )

    const imgElement = screen.getByRole("img")

    expect(imgElement).toHaveAttribute("width", expectedWidth)
  })

  it("render image with width 120px ", () => {
    const expectedWidth = "120px"
    render(
      <MemoryRouter>
        <Avatar size="md" name="alt_value" />
      </MemoryRouter>
    )

    const imgElement = screen.getByRole("img")

    expect(imgElement).toHaveAttribute("width", expectedWidth)
  })
})
