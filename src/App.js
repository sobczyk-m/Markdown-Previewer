import React, {useState} from "react"
import './App.css'
import Editor from "./Editor"
import Preview from "./Preview"
import Toolbar from "./Toolbar"
import {focusContext} from "./FocusContext"


const initialText = "# Markdown syntax guide\n" +
    "\n" +
    "## Headers\n" +
    "\n" +
    "# This is a Heading h1\n" +
    "## This is a Heading h2 \n" +
    "###### This is a Heading h6\n" +
    "\n" +
    "## Emphasis\n" +
    "\n" +
    "*This text will be italic*  \n" +
    "_This will also be italic_\n" +
    "\n" +
    "**This text will be bold**  \n" +
    "__This will also be bold__\n" +
    "\n" +
    "_You **can** combine them_\n" +
    "\n" +
    "## Lists\n" +
    "\n" +
    "### Unordered\n" +
    "\n" +
    "* Item 1\n" +
    "* Item 2\n" +
    "* Item 2a\n" +
    "* Item 2b\n" +
    "\n" +
    "### Ordered\n" +
    "\n" +
    "1. Item 1\n" +
    "1. Item 2\n" +
    "1. Item 3\n" +
    "  1. Item 3a\n" +
    "  1. Item 3b\n" +
    "\n" +
    "## Images\n" +
    "\n" +
    "![This is a alt text.](https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg \"This is a sample image.\")\n" +
    "\n" +
    "## Links\n" +
    "\n" +
    "You may be using [Markdown Live Preview](https://markdownlivepreview.com/).\n" +
    "\n" +
    "## Blockquotes\n" +
    "\n" +
    "> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.\n" +
    ">\n" +
    ">> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.\n" +
    "\n" +
    "## Tables\n" +
    "\n" +
    "| Left columns  | Right columns |\n" +
    "| ------------- |:-------------:|\n" +
    "| left foo      | right foo     |\n" +
    "| left bar      | right bar     |\n" +
    "| left baz      | right baz     |\n" +
    "\n" +
    "## Blocks of code\n" +
    "\n" +
    "```\n" +
    "let message = 'Hello world';\n" +
    "alert(message);\n" +
    "```\n" +
    "\n" +
    "## Inline code\n" +
    "\n" +
    "This web site is using `markedjs/marked`."

function App() {
    const [content, setContent] = useState(initialText)
    const [isFocusActive, setIsFocusActive] = useState(false)

    return (
        <React.Fragment>
            <div id={"editor-container"}>
                <focusContext.Provider value={{isFocusActive, setIsFocusActive}}>
                    <Toolbar label={"editor-icon"} name={"Editor"} type={"edit"}/>
                </focusContext.Provider>
                <Editor content={content} setContent={setContent}/>
            </div>
            <div id={"preview-container"}>
                <focusContext.Provider value={{isFocusActive, setIsFocusActive}}>
                    <Toolbar label={"preview-icon"} name={"Preview"} type={"preview"}/>
                </focusContext.Provider>
                <Preview content={content}/>
            </div>
        </React.Fragment>
    )
}

export default App