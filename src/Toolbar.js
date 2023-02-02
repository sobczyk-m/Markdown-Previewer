import React, {useContext} from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMaximize, faDownLeftAndUpRightToCenter} from '@fortawesome/free-solid-svg-icons'
import {focusContext} from "./FocusContext"

const maximizeIcon = <FontAwesomeIcon icon={faMaximize}/>
const minimizeIcon = <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter}/>

let displayIcon = maximizeIcon

function Toolbar(props) {
    const {isFocusActive, setIsFocusActive} = useContext(focusContext)

    function handleIconClick() {
        console.log(isFocusActive + " before")
        switch (props.type) {
            case "edit": {
                const preview = document.getElementById("preview-container")
                const editor = document.getElementById("editor")
                if (isFocusActive === false) {
                    preview.style.display = "none"
                    editor.style.minHeight = "95vh"
                } else {
                    preview.style.display = "block"
                    editor.style.minHeight = "15rem"
                }
                break
            }
            case "preview": {
                const editorContainer = document.getElementById("editor-container")
                if (isFocusActive === false) {
                    editorContainer.style.display = "none"
                } else {
                    editorContainer.style.display = "block"
                }
                break
            }
            default:
                break
        }
        isFocusActive ? displayIcon = maximizeIcon : displayIcon = minimizeIcon
        setIsFocusActive(!isFocusActive)
    }

    return (
        <React.Fragment>
            <div id={"toolbar"}>
                {props.name}
                <span className={"focusIcon"} id={props.label} onClick={handleIconClick}>
                    <i>{displayIcon}</i>
                    </span>
            </div>
        </React.Fragment>
    )
}

export default Toolbar