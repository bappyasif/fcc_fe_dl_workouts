import React from 'react';
// import ReactWorkoutsContainerComponent from './react-workouts/reactWorkoutsContainerComponent';
import "./app.css";
import ContainerForCalculatorComponents from './CalculatorComponents/ContainerForCalculatorComponents';
// import ContainerForDrumMachine from './DrumMachine/ContainerForDrumMachine';
// import ContainerForMarkdownPreviewer from './MarkdownPreviewer/ContainerForMarkdownPreviewer';
// import RandomQuoteGeneratorContainer from './randomQuoteGeneratorMachine/randomQuoteGeneratorContainer';
// import ContainerForReactRedux from './reactRedux/containerForReactRedux';
// import ContainerForReduxWorkouts from './redux-workouts/containerForReduxWorkouts';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container">
                {/* <ReactWorkoutsContainerComponent /> */}
                {/* <ContainerForReduxWorkouts /> */}
                {/* <ContainerForReactRedux /> */}
                {/* <RandomQuoteGeneratorContainer /> */}
                {/* <ContainerForMarkdownPreviewer /> */}
                {/* <ContainerForDrumMachine /> */}
                <ContainerForCalculatorComponents />
            </div>
        )
    }
}