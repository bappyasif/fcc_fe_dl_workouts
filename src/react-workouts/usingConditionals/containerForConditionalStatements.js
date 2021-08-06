import React, { Component } from 'react'
import ChangingInlineCssConditionally from './changeInlineCssConditionally/index.js'
import RenderWithTernaryOperaters from './renderingWithTernaryOperators.js'
import RenderWithIfElse from './renderWithIfElse'
import WithPropsAndConditionals from './withProps/index.js'

class ContainerForConditionalStatements extends Component {
    render() {
        return (
            <div>
                <RenderWithIfElse />
                <hr />
                <RenderWithTernaryOperaters />
                <hr />
                <WithPropsAndConditionals />
                <hr />
                <ChangingInlineCssConditionally />
                <hr />
            </div>
        )
    }
}

export default ContainerForConditionalStatements
