import React from "react"
import Markdown from "marked-react"

function Preview(props) {

    return (
        <div id={"preview"}>
            <Markdown gfm={true} breaks={true}>{props.content}</Markdown>
        </div>
    )
}

export default Preview