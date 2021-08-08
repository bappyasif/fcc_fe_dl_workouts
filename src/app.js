import React from 'react';
// import ReactWorkoutsContainerComponent from './react-workouts/reactWorkoutsContainerComponent';
import "./app.css";
import ContainerForReactRedux from './reactRedux/containerForReactRedux';
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
                <ContainerForReactRedux />
            </div>
        )
    }
}