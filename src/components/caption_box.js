import React from "react"

import captionBoxStyles from "./caption_box.module.css"

export default props => {
  const styles = {}
  if (props.width) {
    styles["maxWidth"] = props.width
  }
  return (
    <div style={styles} className={captionBoxStyles.captionImageContainer}>
      {props.children}
      {props.caption && <em>{props.caption}</em>}
    </div>
  )
}
