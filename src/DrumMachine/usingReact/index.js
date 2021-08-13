import React, { Component } from 'react'

class DrumMachineUsingReact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            q: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
            w: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
            e: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
            a: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
            s: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
            d: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
            z: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
            x: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
            c: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
            play: ''
        }

        this.playSoundsOnClick = this.playSoundsOnClick.bind(this);
    }

    playSoundsOnClick(evt) {
        
        console.log(evt.target, 'clicked')
    }

    componentDidMount() {   
        let that = this.state;     
        // document.body.querySelector('#display').addEventListener('keypress', testPressed)
        document.body.addEventListener('keypress', keyPressed)
        let list = "q,w,e,a,s,d,z,x,c,Q,W,E,A,S,D,Z,X,C";
        function keyPressed(evt) {
            if(list.split(',').includes(evt.key)) {
                console.log(evt.key,'pressed!!')
                let audio = document.createElement('audio');               
                audio.src = that[evt.key]
                audio.autoplay = true;
            } else {
                console.log(evt.key,'ignore!!')
            }
        }
    }

    playing() {
         console.log('playing!!')
    }

    render() {
        return (
            <div id='drum-machine' className='drum-machine-container'>
                <div id='display'>
                    {/* <Quiz /> */}
                    <div id='Q' className='drum-pad'>
                        {/* <div tabIndex='0' className='pad-key' onKeyDownCapture={(evt) => this.playSounds(evt,'q')} onKeyUp={(evt) => this.playSounds(evt,'q')} onClick={(evt) => this.playSounds(evt,'q')} onKeyDown={(evt) => this.playSounds(evt,'q')} onKeyPress={(evt) => this.playSounds(evt,'q')}>q</div> */}
                        <div tabIndex='0' className='pad-key' onClick={this.playSoundsOnClick}>q</div>
                        {/* <audio src={this.state.q} onPlay={this.playing} onCanPlay={this.playing} autoPlay/> */}
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
                        <audio src='' controls />
                    </div>
                    <div id='X' className='drum-pad'>
                        <div className='pad-key'>x</div>
                        <audio src='' controls />
                    </div>
                    <div id='C' className='drum-pad'>
                        <div className='pad-key'>c</div>
                        <audio src='' controls />
                    </div>
                </div>
            </div>
        )
    }
}

export default DrumMachineUsingReact

