import React from 'react'
import EmojiConvertor from 'emoji-js'
import EmojiBox from './emoji'


const InputBar = ({app}) => {
    const emojiClick = (code, emoji) => {
        const {dispatch, message} = app.props
        let emojiPic = new EmojiConvertor().replace_colons(`:${emoji.name}:`)
        dispatch({type: 'typing', msg: message+emojiPic})
        document.getElementById("m").focus()
    }

    const toggleEmojiBox = () => {
        app.setState({emoji: !app.state.emoji})
    }

    return (
        <div>
            <EmojiBox onEmojiClick={emojiClick} visible={app.state.emoji} />
            <form action="" onSubmit={app.sendIn} className="message">
            <input 
                id="m" 
                autoComplete="off" 
                value={app.props.message} 
                onChange={app.handleChange}
            />
            <div onClick={toggleEmojiBox} id="emoji"><i className="far fa-grin fa-2x"></i></div>
            <button>Send</button>
            </form>
        </div>
    )
}

export default InputBar
