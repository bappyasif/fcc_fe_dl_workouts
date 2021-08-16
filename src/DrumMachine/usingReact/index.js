import React, { Component } from 'react'
import '../styling/index.css';

class DrumMachineUsingReact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            play: '',
            volume: .2
        }

        this.playSoundsOnClick = this.playSoundsOnClick.bind(this);
        this.playSoundsOnPress = this.playSoundsOnPress.bind(this);
        this.handleVolumeLevelChange = this.handleVolumeLevelChange.bind(this);
    }

    playSoundsOnClick(evt) {
        let elem = evt.target;

        let keypadTokens = this.props.list.split(',');
        let idx = keypadTokens.indexOf(elem.id || elem.parentNode.id);

        this.setState({
            play: this.props.drumSounds[idx].name
        })

        let audioElem = document.querySelector(`#${elem.id || elem.parentNode.id}`).querySelector('audio')
        audioElem.volume = this.state.volume;

        audioElem.play();
    }

    playSoundsOnPress(evt) {
        let keypadTokens = this.props.list.split(',');
        let key = evt.key.toLowerCase();
        let idx = keypadTokens.indexOf(key);
        // console.log(key, idx)
        if (keypadTokens.includes(key)) {
            this.setState({ play: this.props.drumSounds[idx].name });
            let audio = document.createElement('audio');
            audio.src = this.props.drumSounds[idx].sound

            audio.volume = this.state.volume;
            audio.play();
        } else {
            console.log(key, 'ignore!!')
        }
    }

    handleVolumeLevelChange(evt) {
        let volumeLevel = document.querySelector('#volume-slider');
        volumeLevel.innerHTML = volumeLevel.value;
        this.setState({ volume: volumeLevel.value })
        // console.log(volumeLevel.value)
    }

    componentDidMount() {
        window.addEventListener('keypress', this.playSoundsOnPress);
    }

    componentWillUnmount() {
        // document.body.removeEventListener('keypress', keyPressed)
        window.removeEventListener('keypress', this.playSoundsOnPress);
    }

    render() {
        return (
            <div id='drum-machine' className='drum-machine-container'>
                <div id='display'>
                    <DrumPads handleClick={this.playSoundsOnClick} drumSounds={this.props.drumSounds} volumeLevel={this.handleVolumeLevelChange} />
                </div>
                <div id='outputs'>
                    <div id='volume-level'>
                        <span>Volume: </span>
                        <input id='volume-slider' type="range" min={.0} max={1} value={this.state.volume} onChange={this.handleVolumeLevelChange} step={.2} />
                    </div>
                    <div id='which-sound'>{this.state.play ? this.state.play : ''}</div>
                </div>
            </div>
        )
    }
}

class DrumPads extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return this.props.drumSounds.map((drum, idx) => {
            return (
                <div key={drum.keypad} id={drum.keypad} className='drum-pad' onClick={this.props.handleClick} >
                    <div className='key-text'>{drum.keypad.toUpperCase()}</div>
                    <audio id={drum.keypad} className="clip" src={this.props.drumSounds[idx].sound} />
                </div>
            )
        })
    }
}

export default DrumMachineUsingReact

