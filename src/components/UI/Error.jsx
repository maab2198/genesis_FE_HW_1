import React from "react"
import PropTypes from "prop-types"

const Error = ({ message }) => {
  console.error(message)

  return <h2>{message}</h2>
}

Error.defaultProps = {
  message: "Some error occurred",
}

Error.propTypes = {
  message: PropTypes.string,
}

export default Error
