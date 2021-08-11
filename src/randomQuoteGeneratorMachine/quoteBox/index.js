import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import {FaTumblr, FaTwitter} from 'react-icons/fa'
import './styles/qb.css';
import randomcolor from "randomcolor";
const url = "https://type.fit/api/quotes";
let twitterIntent = "https://twitter.com/intent/tweet?text=";
let tumblerIntent = 'https://www.tumblr.com/share/caption'


class QuoteBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             quote: '',
             author: ''
        }

        this.newQuoteButtonHandler = this.newQuoteButtonHandler.bind(this)

    }

    newQuoteButtonHandler() {
        this.alwaysNeeded();
    }

    updateStatesForRandomQuotesGenerator(quote, author) {
        this.setState({
            quote,
            author
        })
    }

    randomNumberGenerator(length) {
        return Math.floor(Math.random()*length);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextState.quote !== this.state.quote
    // }

    
    findUsefulQuotesObject(res, length) {
        let whichBlock = this.randomNumberGenerator(length)
        let randomQuoteObject = res[whichBlock];
        // console.log(randomQuoteObject, "<>")
        return randomQuoteObject
    }

    fetchData(url) {
        return fetch(url)
        .then(data=>data.json())
        .then(res=> {
            let randomQuoteObject = this.findUsefulQuotesObject(res, res.length)
            if(randomQuoteObject.author) {
                return randomQuoteObject;
            } else {
                return this.findUsefulQuotesObject(res, res.length)
                // return randomQuoteObject;
            }
        }).catch(err=>console.log(err))
    }

    updateStates(quoteData) {
        quoteData.then(data=>{
            this.updateStatesForRandomQuotesGenerator(data.text, data.author)
        }).catch(err=>console.log(err))
    }

    alwaysNeeded() {
        let quoteData = this.fetchData(url);
        this.updateStates(quoteData);
    }

    componentDidMount() {
        this.alwaysNeeded()        ;
    }
    
    render() {
        let color = randomcolor();
        document.documentElement.style
        .setProperty('--randomColor', color);
        
        // let twitterElem = <FontAwesomeIcon icon={faCoffee} color='white' />
        // let fbElem = <FontAwesomeIcon icon={faThumbsUp} color='white' />
        let twitterElem = <FaTwitter color='white' />
        let fbElem = <FaTumblr color='white' />

        let quoteElem = this.state.quote ? this.state.quote : 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
        let authorElem = this.state.author ? this.state.author : 'unknown author'
        return (
            <div id='quote-box'>
                    <div id='top-layer'>
                        <div id='text'>{quoteElem}</div>
                        <div id='author-div'>"<span id='author'>{authorElem}</span>"</div>
                    </div>
                    <div id='bottom-layer'>
                        <div className="shareble-links">
                            <a target='_blank' href={twitterIntent+this.state.quote+" By "+this.state.author} id='tweet-quote'>{twitterElem}</a>
                            <a target='_blank' href={tumblerIntent+this.state.quote+" By "+this.state.author} id='fb-quote'>{fbElem}</a>
                        </div>
                        <button id='new-quote' onClick={this.newQuoteButtonHandler}>New Quote</button>
                    </div>
                </div>
        )
    }
}

export default QuoteBox
