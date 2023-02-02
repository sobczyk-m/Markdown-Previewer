import React from "react"

function Editor(props) {
    return (
        <textarea id="editor" value={props.content}
                  onChange={event => props.setContent(event.target.value)}></textarea>
    )
}

export default Editor