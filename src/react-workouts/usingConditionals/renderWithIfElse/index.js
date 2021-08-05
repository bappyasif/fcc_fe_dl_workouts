import React, { Component } from 'react'

export class RenderWithIfElse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }

    toggleDisplay() {
        this.setState((state) => ({
            display: !state.display
        }));
    }

    //  using && instead of if-else
    render() {
        return (
            <div>
                <button onClick={this.toggleDisplay}>Toggle Display</button>
                {this.state.display && <h1>Displayed!</h1>}
            </div>
        );
    }



    //  using if-else
    // render() {
    //     if(this.state.display) {
    //         return (
    //             <div>
    //                 <button onClick={this.toggleDisplay}>Toggle Display</button>
    //                 <h1>Displayed!</h1>
    //             </div>
    //         );
    //     } else {
    //         return <button onClick={this.toggleDisplay}>Toggle Display</button>
    //     }
    // }

    //  using ternary
    // render() {
    //     let display = this.state.display ? "Displayed" : "Hidden"
    //     return (
    //         <div>
    //             <button onClick={this.toggleDisplay}>Toggle Display</button>
    //             <h1>{display} is Displayed!</h1>
    //         </div>
    //     );
    // }
}

export default RenderWithIfElse
