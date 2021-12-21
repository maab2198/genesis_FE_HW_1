import React from "react"
import {useState, useEffect, useRef} from "react"

const Video = () => {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll, 200))

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const startVideo = () => {
    videoRef.current.pause()
    setPlaying(false)
  }

  const pauseVideo = () => {
    videoRef.current.play()
    setPlaying(true)
  }

  const handleScroll = (e) => {
    if (playing) {
      pauseVideo()
    }
  }

  const handleVideoPress = () => {
    if (playing) {
      startVideo()
    } else {
      pauseVideo()
    }
  }

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src={url}
      ></video>
    </div>
  )
}

export default Video
