import React, { Component } from 'react'
// import { drumSounds, list } from '../ContainerForDrumMachine';
import '../styling/index.css';

let drumSounds = {
    q: {
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        name: 'Heater-01'
    },
    w: {
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        name: 'Heater-02'
    },
    e: {
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        name: 'Heater-03'
    },
    a: {
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        name: 'Heater-04'
    },
    s: {
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        name: 'Heater-06'
    },
    d: {
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        name: 'Dsc_oh'
    },
    z: {
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        name: 'Kick_n_Hat'
    },
    x: {
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        name: 'RP4_Kick_01'
    },
    c: {
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
        name: 'Cev_H2'
    },
}

let list = "q,w,e,a,s,d,z,x,c,Q,W,E,A,S,D,Z,X,C";

class DrumMachineUsingReact extends Component {
    constructor(props) {
        super(props)

        this.state = {   
            play: ''
        }

        console.log(this.props, "??")

        this.playSoundsOnClick = this.playSoundsOnClick.bind(this);
    }

    playSoundsOnClick(evt) {        
        let elem = evt.target;
        this.setState({
            play: drumSounds[elem.id.toLowerCase() || elem.parentNode.parentNode.id.toLowerCase()].name
        })
        let audioElem = document.body.querySelector(`#${elem.id || elem.parentNode.parentNode.id}`).querySelector('audio')
        audioElem.play();
    }

    componentDidMount() {
        let that = this;

        document.body.addEventListener('keypress', keyPressed)

        function keyPressed(evt) {
            playSound(evt.key);
        }

        function playSound(key) {
            if (list.split(',').includes(key)) {
                that.setState({play: drumSounds[key.toLowerCase()].name});
                let audio = document.createElement('audio');
                audio.src = drumSounds[key.toLowerCase()].sound
                audio.autoplay = true;
            } else {
                console.log(key, 'ignore!!')
            }
        }
    }

    componentWillUnmount() {
        document.body.removeEventListener('keypress', keyPressed)
    }

    render() {
        // let check = this.state.play == 'Q' ? autoPlay : false;
        // console.log(this.props)
        return (
            <div id='drum-machine' className='drum-machine-container'>
                <div id='display'>
                    {/* <Quiz /> */}
                    <div id='Q' className='drum-pad' onClick={this.playSoundsOnClick}>
                        {/* <audio src={drumSounds.q.sound} autoPlay onFocus /> */}
                        <div tabIndex='0' className='pad-key'>
                            <div className='key-text'>q</div>
                            <audio src={drumSounds.q.sound} />
                        </div>
                    </div>
                    <div id='W' className='drum-pad' onClick={this.playSoundsOnClick}>
                        <div className='pad-key'>
                            <div className='key-text'>w</div>
                            <audio src={drumSounds.w.sound} />
                        </div>
                        {/* <audio src='' autoPlay /> */}
                    </div>
                    <div id='E' className='drum-pad' onClick={this.playSoundsOnClick}>
                        <div className='pad-key'>
                            <div className='key-text'>e</div>
                            <audio src={drumSounds.e.sound} />
                        </div>
                        {/* <audio src='' autoPlay /> */}
                    </div>
                    <div id='A' className='drum-pad' onClick={this.playSoundsOnClick}>
                        <div className='pad-key'>
                            <div className='key-text'>a</div>
                            <audio src={drumSounds.a.sound} autoPlay />
                        </div>
                        {/* <audio src='' autoPlay /> */}
                    </div>
                    <div id='S' className='drum-pad' onClick={this.playSoundsOnClick}>
                        <div className='pad-key'>
                            <div className='key-text'>s</div>
                            <audio src={drumSounds.s.sound} />
                        </div>
                        {/* <audio src='' autoPlay /> */}
                    </div>
                    <div id='D' className='drum-pad' onClick={this.playSoundsOnClick}>
                        <div className='pad-key'>
                            <div className='key-text'>d</div>
                            <audio src={drumSounds.d.sound} />
                        </div>
                        {/* <audio src='' autoPlay /> */}
                    </div>
                    <div id='Z' className='drum-pad' onClick={this.playSoundsOnClick}>
                        <div className='pad-key'>
                            <div className='key-text'>z</div>
                            <audio src={drumSounds.z.sound} />
                        </div>
                        {/* <audio src='' autoPlay /> */}
                    </div>
                    <div id='X' className='drum-pad' onClick={this.playSoundsOnClick}>
                        <div className='pad-key'>
                            <div className='key-text'>x</div>
                            <audio src={drumSounds.x.sound} />
                        </div>
                        {/* <audio src='' autoPlay /> */}
                    </div>
                    <div id='C' className='drum-pad' onClick={this.playSoundsOnClick}>
                        <div className='pad-key'>
                            <div className='key-text'>c</div>
                            <audio src={drumSounds.c.sound} />
                        </div>
                        {/* <audio src='' autoPlay /> */}
                    </div>
                </div>
                <div id='which-sound'>{this.state.play ? this.state.play : ''}</div>
            </div>
        )
    }
}

export default DrumMachineUsingReact

