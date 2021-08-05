import React, { Component } from 'react'
import RenderWithTernaryOperaters from './renderingWithTernaryOperators.js'
import RenderWithIfElse from './renderWithIfElse'

class ContainerForConditionalStatements extends Component {
    render() {
        return (
            <div>
                <RenderWithIfElse />
                <hr />
                <RenderWithTernaryOperaters />
            </div>
        )
    }
}

export default ContainerForConditionalStatements
