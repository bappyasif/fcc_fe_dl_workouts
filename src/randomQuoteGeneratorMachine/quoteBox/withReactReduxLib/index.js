import randomColor from "randomcolor";
import React from "react";
import { FaTumblr, FaTwitter } from "react-icons/fa";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import { createStore } from "redux";
const url = "https://type.fit/api/quotes";
let twitterIntent = "https://twitter.com/intent/tweet?text=";
let tumblerIntent = 'https://www.tumblr.com/share/caption'
const SHOW = 'SHOW';

let showQuotes = (quote, author) => {
    console.log(quote, author, "here!!")
    return {
        type: SHOW,
        quote,
        author
    }
}

let quoteReducer = (state={}, action) => {
    switch(action.type) {
        case SHOW:
            return {...state}
    }
}

let store = createStore(quoteReducer);

class QuoteGenerator extends React.Component {
    constructor(props) {
        super(props)

        this.newQuoteButtonHandler = this.newQuoteButtonHandler.bind(this)

    }

    newQuoteButtonHandler() {
        this.alwaysNeeded();
    }

    updateStatesForRandomQuotesGenerator(quote, author) {
        // this.setState({
        //     quote,
        //     author
        // })
        console.log(author, quote, this.props);
        this.props.quote = quote;
        this.props.author = author
        this.props.handleQuotes(quote, author)
        console.log(author, quote, this.props, 'updated!!');
    }

    randomNumberGenerator(length) {
        return Math.floor(Math.random()*length);
    }

    fetchData(url) {
        return fetch(url)
        .then(data=>data.json())
        .then(res=> {
            let whichBlock = this.randomNumberGenerator(res.length)
            let randomQuoteObject = res[whichBlock];
            if(randomQuoteObject.author) {
                return res[whichBlock];
            }
            else return false
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
        let color = randomColor();
        document.documentElement.style
        .setProperty('--randomColor', color);
        
        let twitterElem = <FaTwitter color='white' />
        let fbElem = <FaTumblr color='white' />

        let quoteElem = this.props.quote ? this.props.quote : 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
        let authorElem = this.props.author ? this.props.author : 'unknown author'
        return (
            <div id='quote-box'>
                    <div id='top-layer'>
                        <div id='text'>{quoteElem}</div>
                        <div id='author-div'>"<span id='author'>{authorElem}</span>"</div>
                    </div>
                    <div id='bottom-layer'>
                        <div className="shareble-links">
                            <a target='_blank' href={twitterIntent+this.props.quote+" By "+this.props.author} id='tweet-quote'>{twitterElem}</a>
                            <a target='_blank' href={tumblerIntent+this.props.quote+" By "+this.props.author} id='fb-quote'>{fbElem}</a>
                        </div>
                        <button id='new-quote' onClick={this.newQuoteButtonHandler}>New Quote</button>
                    </div>
                </div>
        )
    }
}

let mapStateToProps = state => {
    console.log(state, "??")
    return {
        // state
        author: state,
        quote: state
    }
}

let mapDispatchToProps = dispatch => {
    return {
        handleQuotes: (quote, author) => {
            console.log(quote, author);
            dispatch(showQuotes(quote, author))
        }
    }
}

let ConnectedContainer = connect(mapStateToProps, mapDispatchToProps) (QuoteGenerator);

class QuoteWrapper extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <ConnectedContainer />
            </Provider>
        )
    }
}

export default QuoteWrapper;