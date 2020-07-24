import React from "react"
import ReactEmojiMixin from "react-emoji"
import createReactClass from "create-react-class"

/*
 * Custom emoji component using react-emoji
 * https://github.com/banyan/react-emoji
 *
 * Pass the emoji name as the `name` prop
 * See list of supported names here
 * https://api.github.com/emojis
 *
 * Viewable version here:
 * https://gist.github.com/rxaviers/7360908
 */

export default createReactClass({
  mixins: [ReactEmojiMixin],
  render() {
    const options = { singleEmoji: true, strict: true, emojiType: "twemoji" }
    const string = ":" + this.props.name + ":"
    return <span>{this.emojify(string, options)}</span>
  },
})
