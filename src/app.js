import React from 'react';
import ReactWorkoutsContainerComponent from './react-workouts/reactWorkoutsContainerComponent';
import "./app.css";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container">
                <ReactWorkoutsContainerComponent />
            </div>
        )
    }
}