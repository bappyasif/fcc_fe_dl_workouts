import React, { Component } from 'react'
import FilterMethod from './filterMethod'
import MapMethod from './mapMethod'

class ContainerForArrayUsages extends Component {
    render() {
        return (
            <div>
                <MapMethod />
                <hr />
                <FilterMethod />
                <hr />
            </div>
        )
    }
}

export default ContainerForArrayUsages
