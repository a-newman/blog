import React from "react"
import { DiscussionEmbed } from "disqus-react"

export default props => {
  const disqusConfig = {
    shortname: "annie-makes-tech-styles",
    config: { identifier: props.slug, title: props.title },
  }
  return (
    <div>
      <DiscussionEmbed {...disqusConfig} />
    </div>
  )
}
