import React from "react"
import PropTypes from "prop-types"

import styles from "./Video.module.css"
import mockVideo from "../../assets/video/mock_video.mp4"

const Video = ({ videoUrl }) => (
  <video
    controls=""
    name="Video Name"
    className={styles.video}
    src={mockVideo || videoUrl  }
    type="video/mp4"
    video="100%"
    onMouseOver={(event) => event.target.play()}
    onMouseOut={(event) => event.target.pause()}
    onFocus={() => {}}
    onBlur={() => {}}
  >
    <track default kind="captions" srcLang="en" src="SRC" />
  </video>
)

Video.propTypes = {
  videoUrl: PropTypes.string.isRequired,
}

export default Video
