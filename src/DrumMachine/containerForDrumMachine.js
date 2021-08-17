import React, { Component } from 'react'
import DrumMachineUsingReact from './usingReact'
import DrumMachineUsingRedux from './usingReactReduxLib';

// export let drumSounds = {
//     q: {
//         sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
//         name: 'Heater-01'
//     },
//     w: {
//         sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
//         name: 'Heater-02'
//     },
//     e: {
//         sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
//         name: 'Heater-03'
//     },
//     a: {
//         sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
//         name: 'Heater-04'
//     },
//     s: {
//         sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
//         name: 'Heater-06'
//     },
//     d: {
//         sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
//         name: 'Dsc_oh'
//     },
//     z: {
//         sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
//         name: 'Kick_n_Hat'
//     },
//     x: {
//         sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
//         name: 'RP4_Kick_01'
//     },
//     c: {
//         sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
//         name: 'Cev_H2'
//     },
// }

export let drumSounds = [
    {
        keypad: 'q',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        name: 'Heater-01'
    },
    {
        keypad: 'w',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        name: 'Heater-02'
    },
    {
        keypad: 'e',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        name: 'Heater-03'
    },
    {
        keypad: 'a',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        name: 'Heater-04'
    },
    {
        keypad: 's',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        name: 'Heater-06'
    },
    {
        keypad: 'd',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        name: 'Dsc_oh'
    },
    {
        keypad: 'z',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        name: 'Kick_n_Hat'
    },
    {
        keypad: 'x',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        name: 'RP4_Kick_01'
    },
    {
        keypad: 'c',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
        name: 'Cev_H2'
    },
]

// export let list = "q,w,e,a,s,d,z,x,c,Q,W,E,A,S,D,Z,X,C";
export let list = "q,w,e,a,s,d,z,x,c";

class ContainerForDrumMachine extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='drum-machine-outer-container'>
                <h4>Drum Machine</h4>
                <DrumMachineUsingReact drumSounds={drumSounds} list={list} />
                <DrumMachineUsingRedux />
            </div>
        )
    }
}

export default ContainerForDrumMachine
