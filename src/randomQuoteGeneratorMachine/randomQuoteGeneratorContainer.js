import React, { Component } from 'react'
import QuoteBox from './quoteBox'
import QuoteWrapper from './quoteBox/withReactReduxLib'

class RandomQuoteGeneratorContainer extends Component {
    render() {
        return (
            <div>
                <h4>Random Quote Generator Machine</h4>
                <QuoteBox />
                <QuoteWrapper />
            </div>
        )
    }
}

export default RandomQuoteGeneratorContainer;
