import React from "react";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import { createStore } from "redux";
import { drumSounds, list } from "../ContainerForDrumMachine";

const PLAY = 'PLAY';

let handlePLaying = instrument => {
    return {
        type: PLAY,
        instrument
    }
}

let playReducer = (state, action) => {
    switch(action.type) {
        case PLAY:
            state=[];
            // console.log(action, "??")
            return[...state, action.instrument]
        default:
            return state
    }
}

let store = createStore(playReducer);

class DrumMachine extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // play: '',
            volume: .2
        }

        this.playSoundsOnClick = this.playSoundsOnClick.bind(this);
        this.playSoundsOnPress = this.playSoundsOnPress.bind(this);
        this.handleVolumeLevelChange = this.handleVolumeLevelChange.bind(this);
        this.onKeyPressed = this.onKeyPressed.bind(this)
    }

    playSoundsOnClick(evt) {
        let elem = evt.target;

        let keypadTokens = list.split(',');
        let idx = keypadTokens.indexOf(elem.id || elem.parentNode.id);

        // this.setState({
        //     play: this.props.drumSounds[idx].name
        // })
        // console.log(this.props)
        this.props.handleInstruments(drumSounds[idx].name);

        let audioElem = document.querySelector(`#${elem.id || elem.parentNode.id}`).querySelector('audio')
        audioElem.volume = this.state.volume;

        audioElem.play();
    }

    playSoundsOnPress(evt) {
        let keypadTokens = list.split(',');
        let key = evt.key.toLowerCase();

        let keyId = evt.target.querySelector(`#${key}`).id;
        let idx = keypadTokens.indexOf(key);
        
        let keyPressed = document.querySelector(`#${keyId}`);
        
        if (keyPressed) {
            // this.setState({ play: this.props.drumSounds[idx].name });
            this.props.handleInstruments(drumSounds[idx].name);
            
            let audio = keyPressed.querySelector('audio');

            audio.volume = this.state.volume;
            audio.play();
        } else {
            console.log(key, 'ignore!!')
        }
    }

    handleVolumeLevelChange(evt) {
        // let volumeLevel = document.querySelector('#volume-slider');
        let volumeLevel = evt.target;
        volumeLevel.innerHTML = volumeLevel.value;
        this.setState({ volume: volumeLevel.value })
    }

    componentDidMount() {
        window.addEventListener('keypress', this.playSoundsOnPress);
    }

    componentWillUnmount() {
        window.removeEventListener('keypress', this.playSoundsOnPress);
    }

    onKeyPressed(e) {
        console.log(e.key);
    }

    render() {
        return (
            
            <div id='drum-machine' className='drum-machine-container'>
                <div id='display'>
                    <DrumPads handleClick={this.playSoundsOnClick} drumSounds={this.props.drumSounds} />
                </div>
                <div id='outputs'>
                    <div id='volume-level'>
                        <span>Volume: </span>
                        <input id='volume-slider' type="range" min={.0} max={1} value={this.state.volume} onChange={this.handleVolumeLevelChange} step={.2} />
                    </div>
                    {/* <div id='which-sound'>{this.state.play ? this.state.play : ''}</div> */}
                    <div id='which-sound'>{this.props.instrument ? this.props.instrument : ''}</div>
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
        return drumSounds.map((drum, idx) => {
            return (
                <div key={drum.keypad} id={drum.keypad} className='drum-pad' onClick={this.props.handleClick} >
                    <div className='key-text'>{drum.keypad.toUpperCase()}</div>
                    <audio id={drum.keypad} className="clip" src={drumSounds[idx].sound} />
                </div>
            )
        })
    }
}

let mapStateToProps = state => {
    // console.log(state, "<>")
    return {
        instrument: state
        // instrument: state[0]
    }
}

let mapDispatchToProps = dispatch => {
    return {
        handleInstruments: (instrument) => dispatch(handlePLaying(instrument))
    }
}

let ContainerComponent = connect(mapStateToProps, mapDispatchToProps) (DrumMachine)

class DrumMachineUsingRedux extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <ContainerComponent />
            </Provider>
        )
    }
}

export default DrumMachineUsingRedux;