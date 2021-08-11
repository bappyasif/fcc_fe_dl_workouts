import React, { Component } from 'react'
import MarkdownPreviewerUsingReact from './usingReact'
import WrapperContainer from './withReactReduxLib'


class ContainerForMarkdownPreviewer extends Component {
    render() {
        return (
            <div>
                <h4>Markdown Previewer</h4>
                <MarkdownPreviewerUsingReact />
                <WrapperContainer />
            </div>
        )
    }
}

export default ContainerForMarkdownPreviewer
