import React, { useState } from 'react'
import PresentationalLogics from '../presentational';

function Clock25Plus5() {
    let[breakTime, setBreakTime] = useState(5);
    let[sessionTime, setSessionTime] = useState(25);
    return (
        <div className='inner-container'>
            <PresentationalLogics breakTime={breakTime} sessionTime={sessionTime} />
        </div>
    )
}

export default Clock25Plus5
