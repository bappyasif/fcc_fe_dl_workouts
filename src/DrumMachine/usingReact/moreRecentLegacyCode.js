import React, { Component } from 'react'
import '../styling/index.css';

class DrumMachineUsingReact extends Component {
    constructor(props) {
        super(props)

        this.state = {   
            play: ''
        }

        console.log(this.props, "??")

        this.playSoundsOnClick = this.playSoundsOnClick.bind(this);
        this.playSoundsOnPress = this.playSoundsOnPress.bind(this);
    }

    playSoundsOnClick(evt) {        
        let elem = evt.target;
        this.setState({
            play: this.props.drumSounds[elem.id.toLowerCase() || elem.parentNode.parentNode.id.toLowerCase()].name
        })
        let audioElem = document.body.querySelector(`#${elem.id || elem.parentNode.parentNode.id}`).querySelector('audio')
        audioElem.play();
    }

    playSoundsOnPress(evt) {
        let key = evt.key;
        if (this.props.list.split(',').includes(key)) {
            this.setState({play: this.props.drumSounds[key.toLowerCase()].name});
            let audio = document.createElement('audio');
            audio.src = this.props.drumSounds[key.toLowerCase()].sound
            audio.play();
        } else {
            console.log(key, 'ignore!!')
        }
    }

    componentDidMount() {
        let that = this;

        // document.body.addEventListener('keypress', keyPressed)
        // window.addEventListener('keypress', keyPressed)
        window.addEventListener('keypress', this.playSoundsOnPress)

        function keyPressed(evt) {
            // playSound(evt.key);
            that.playSoundsOnPress(evt.key)
        }
    }

    componentWillUnmount() {
        // document.body.removeEventListener('keypress', keyPressed)
        window.removeEventListener('keypress', this.playSoundsOnPress)
    }

    render() {
        return (
            <div id='drum-machine' className='drum-machine-container'>
                <div id='display'>
                    <div id='Q' className='drum-pad' onClick={this.playSoundsOnClick}>
                        {/* <audio src={this.props.drumSounds.q.sound} autoPlay onFocus /> */}
                        <div tabIndex='0' className='pad-key'>
                            <div className='key-text'>q</div>
                            <audio src={this.props.drumSounds.q.sound} />
                        </div>
                    </div>
                    <div id='W' className='drum-pad' onClick={this.playSoundsOnClick}>
                        <div className='pad-key'>
                            <div className='key-text'>w</div>
                            <audio src={this.props.drumSounds.w.sound} />
                        </div>
                        {/* <audio src='' autoPlay /> */}
                    </div>
                    <div id='E' className='drum-pad' onClick={this.playSoundsOnClick}>
                        <div className='pad-key'>
                            <div className='key-text'>e</div>
                            <audio src={this.props.drumSounds.e.sound} />
                        </div>
                        {/* <audio src='' autoPlay /> */}
                    </div>
                    <div id='A' className='drum-pad' onClick={this.playSoundsOnClick}>
                        <div className='pad-key'>
                            <div className='key-text'>a</div>
                            <audio src={this.props.drumSounds.a.sound} autoPlay />
                        </div>
                        {/* <audio src='' autoPlay /> */}
                    </div>
                    <div id='S' className='drum-pad' onClick={this.playSoundsOnClick}>
                        <div className='pad-key'>
                            <div className='key-text'>s</div>
                            <audio src={this.props.drumSounds.s.sound} />
                        </div>
                        {/* <audio src='' autoPlay /> */}
                    </div>
                    <div id='D' className='drum-pad' onClick={this.playSoundsOnClick}>
                        <div className='pad-key'>
                            <div className='key-text'>d</div>
                            <audio src={this.props.drumSounds.d.sound} />
                        </div>
                        {/* <audio src='' autoPlay /> */}
                    </div>
                    <div id='Z' className='drum-pad' onClick={this.playSoundsOnClick}>
                        <div className='pad-key'>
                            <div className='key-text'>z</div>
                            <audio src={this.props.drumSounds.z.sound} />
                        </div>
                        {/* <audio src='' autoPlay /> */}
                    </div>
                    <div id='X' className='drum-pad' onClick={this.playSoundsOnClick}>
                        <div className='pad-key'>
                            <div className='key-text'>x</div>
                            <audio src={this.props.drumSounds.x.sound} />
                        </div>
                        {/* <audio src='' autoPlay /> */}
                    </div>
                    <div id='C' className='drum-pad' onClick={this.playSoundsOnClick}>
                        <div className='pad-key'>
                            <div className='key-text'>c</div>
                            <audio src={this.props.drumSounds.c.sound} />
                        </div>
                        {/* <audio src='' autoPlay /> */}
                    </div>
                </div>
                <div id='which-sound'>{this.state.play ? this.state.play : ''}</div>
            </div>
        )
    }
}

// class DrumPads

export default DrumMachineUsingReact

