import React from 'react'

function PresentationalLogic(props) {
    return (
        <div className='calculator-container'>
            <div id='display'>
                <input onChange={props.handleDisplayChange} value={props.display} onFocus={props.focus} autoFocus />
            </div>
            <div id='sections'>
                <div id='top-section'>
                    <div id='all-nums'>
                        {/* <div className='numbers' id='zero'>0</div> */}
                        <input type='button' value='1' className='numbers' id='one' onClick={props.digits} />
                        <input type='button' value='2' className='numbers' id='two' onClick={props.digits} />
                        <input type='button' value='3' className='numbers' id='three' onClick={props.digits} />
                        <input type='button' value='4' className='numbers' id='four' onClick={props.digits} />
                        <input type='button' value='5' className='numbers' id='five' onClick={props.digits} />
                        <input type='button' value='6' className='numbers' id='six' onClick={props.digits} />
                        <input type='button' value='7' className='numbers' id='seven' onClick={props.digits} />
                        <input type='button' value='8' className='numbers' id='eight' onClick={props.digits} />
                        <input type='button' value='9' className='numbers' id='nine' onClick={props.digits} />
                    </div>
                    <div id='all-extras'>
                        <input type='button' value='0' className='numbers' className='extras' id='zero' onClick={props.digits} />
                        <input type='button' value='.' className='extras' id='decimal' />
                        <button className='extras' id='clear' onClick={props.clear}>Clr</button>
                        <button className='extras' id='equals'>=</button>
                    </div>
                </div>
                <div id='bottom-section'>
                    <div id='all-ops'>
                        <input type='button' value='+' className='operators' id='add' />
                        <input type='button' value='-' className='operators' id='subract' />
                        <input type='button' value='*' className='operators' id='multiply' />
                        <input type='button' value='/' className='operators' id='divide' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PresentationalLogic
