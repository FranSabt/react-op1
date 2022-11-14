import React, { useState } from 'react'
import { Child } from '../pure/forms/Child'

export const Father = () => {
    const [pint, setPint] = useState('')
    const msgFunc = (e) => {
    setPint(e)
    }
  return (
    <div>
        Father start
        <div>
            <div>
                {pint ? pint : null}
            </div>
        <Child func={msgFunc}/>
        </div>
        <br/>
        Father Ends
    </div>
  )
}
