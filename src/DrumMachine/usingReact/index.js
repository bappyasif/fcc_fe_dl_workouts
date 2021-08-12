import React, { Component } from 'react'

class DrumMachineUsingReact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             q:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
             w:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
             e:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
             a:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
             s:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
             d:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
             z:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
             x:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
             c:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
             play: ''
        }

        this.playSounds = this.playSounds.bind(this);
    }

    playSounds(key) {
        this.setState({play: <audio src={this.state.q} autoPlay/>})
        console.log(key);
        if(key == 'q') {
            <audio src={this.state.q} autoPlay/>
        }
    }
    
    render() {
        return (
            <div id='drum-machine' className='drum-machine-container'>
                <div id='display'>
                    <div id='Q' className='drum-pad'>
                        {/* <div tabIndex='0' className='pad-key' onKeyDownCapture={(evt) => this.playSounds(evt,'q')} onKeyUp={(evt) => this.playSounds(evt,'q')} onClick={(evt) => this.playSounds(evt,'q')} onKeyDown={(evt) => this.playSounds(evt,'q')} onKeyPress={(evt) => this.playSounds(evt,'q')}>q</div> */}
                        <div tabIndex='0' className='pad-key' onKeyPressCapture={this.playSounds}>q</div>
                        {/* <audio src={this.state.q} autoPlay/> */}
                    </div>
                    <div id='W' className='drum-pad'>
                        <div className='pad-key'>w</div>
                        <audio src='' controls />
                    </div>
                    <div id='e' className='drum-pad'>
                        <div className='pad-key'>e</div>
                        <audio src='' controls />
                    </div>
                    <div id='A' className='drum-pad'>
                        <div className='pad-key'>a</div>
                        <audio src='' controls />
                    </div>
                    <div id='S' className='drum-pad'>
                        <div className='pad-key'>s</div>
                        <audio src='' controls />
                    </div>
                    <div id='D' className='drum-pad'>
                        <div className='pad-key'>d</div>
                        <audio src='' controls />
                    </div>
                    <div id='Z' className='drum-pad'>
                        <div className='pad-key'>z</div>
                        <audio src='' controls/>
                    </div>
                    <div id='X' className='drum-pad'>
                        <div className='pad-key'>x</div>
                        <audio src='' controls />
                    </div>
                    <div id='C' className='drum-pad'>
                        <div className='pad-key'>c</div>
                        <audio src='' controls />
                    </div>
                    {/* <figure>
                        <figcaption>Listen to the T-Rex:</figcaption>
                        <audio
                        autoPlay
                            controls
                            src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3">
                            
                        </audio>
                    </figure> */}
                </div>
            </div>
        )
    }
}

export default DrumMachineUsingReact
