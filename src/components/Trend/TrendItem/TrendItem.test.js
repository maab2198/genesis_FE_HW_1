import React from "react"
import { render, screen} from "@testing-library/react"
import TrendItem from "./TrendItem"

const item = {
    videoMeta: { height: 100, weight: 100},
    covers: "",
    videoUrl: "",
    authorMeta: {},
    text: "",
    musicMeta: {},
    hashtags: ["tag1", "tag2"],
    diggCount: 100,
    shareCount: 100,
    commentCount: 100
  }
  
jest.mock('../../Video/Video', () => () => (<div>Video</div>));
jest.mock('../Author/Author', () => () => (<div>Author</div>));
jest.mock('../HashtagList/HashtagList', () => () => (<div>HashtagList</div>));


describe("TrendItem", () => {
    it("renders Video component", () => {
      render(<TrendItem item = {item} />)
  
      expect(screen.getByText(/Video/i)).toBeInTheDocument()
    })
    it("renders Author component", () => {
        render(<TrendItem item = {item}/>)
        expect(screen.getByText(/Author/i)).toBeInTheDocument()
      })
      it("renders HashtagList component", () => {
        render(<TrendItem  item = {item}/>)    
        expect(screen.getByText(/HashtagList/i)).toBeInTheDocument()
      })
})