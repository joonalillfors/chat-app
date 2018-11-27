import EmojiPicker from 'emoji-picker-react'
import React from 'react'

const EmojiBox = ({onEmojiClick, visible}) => {
    const showWhenVisible = { display: visible ? '' : 'none' }
    return (
        <div id="emojiBox" style={showWhenVisible}>
            <EmojiPicker onEmojiClick={onEmojiClick} preload/>
        </div>
    )
}

export default EmojiBox