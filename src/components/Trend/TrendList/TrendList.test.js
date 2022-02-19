import { render, screen } from "@testing-library/react"
import TrendList from "./TrendList"

import useHttp from "../../../hooks/use-http"

jest.mock("../../UI/LoadingSpinner/LoadingSpinner", () => () => (
  <div>LoadingSpinner</div>
))
jest.mock("../TrendItem/TrendItem", () => () => <div>item</div>)
jest.mock("../../../hooks/use-http", () => jest.fn())

describe("TrendList", () => {
  it("render loading spinner", () => {
    useHttp.mockImplementationOnce(() => ({
      sendRequest: () => {},
      error: null,
      status: "pending",
      data: [],
    }))
    render(<TrendList />)

    expect(screen.getByText(/LoadingSpinner/i)).toBeTruthy()
  })

  it("render list of items", async () => {
    useHttp.mockImplementationOnce(() => ({
      sendRequest: () => {},
      error: null,
      status: "completed",
      data: [{ id: 1 }, { id: 2 }],
    }))
    render(<TrendList />)

    expect(await screen.findAllByText(/item/)).toBeTruthy()
  })

  it("render erorr", async () => {
    useHttp.mockImplementationOnce(() => ({
      sendRequest: () => {},
      error: { message: "error text" },
      status: "complited",
      data: [{ id: 1 }, { id: 2 }],
    }))
    render(<TrendList />)

    expect(await screen.findByText(/error text/)).toBeTruthy()
  })
})
