import React, { Component } from 'react'
let stylesObj = {color: "purple", fontSize: 40, border: "2px solid purple"}

class InLine extends Component {
    render() {
        return (
            <div>
                {/* <div style={{"color: yellow; fontSize: 16px"}}>Mellow Yellow</div> */}
                <div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>
                <div style={{color: "red", fontSize: "72px"}}>big red</div>
                <div style={stylesObj}>Awesome Purple</div>
                <MagicEightBall />
            </div>
        )
    }
}

const inputStyle = {
    width: 235,
    margin: 5
  };
  
  class MagicEightBall extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userInput: '',
        randomIndex: ''
      };
      this.ask = this.ask.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    ask() {
      if (this.state.userInput) {
        this.setState({
          randomIndex: Math.floor(Math.random() * 20),
          userInput: ''
        });
      }
    }
    handleChange(event) {
      this.setState({
        userInput: event.target.value
      });
    }
    render() {
      const possibleAnswers = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        "Don't count on it",
        'My reply is no',
        'My sources say no',
        'Most likely',
        'Outlook not so good',
        'Very doubtful'
      ];
    //   const answer = possibleAnswers[this.state.randomIndex];
    const answer = this.state.randomIndex >=0 ? possibleAnswers[this.state.randomIndex] : '';
      return (
        <div>
          <input
            type='text'
            value={this.state.userInput}
            onChange={this.handleChange}
            style={inputStyle}
          />
          <br />
          <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
          <br />
          <h3>Answer:</h3>
          <p>
            {/* Change code below this line */}
            {/* <p>{possibleAnswers[answer]}</p> */}
            {/* <p>{this.state.randomIndex ? answer : ''}</p> */}
            {answer}
            {/* Change code above this line */}
          </p>
        </div>
      );
    }
  }

export default InLine
