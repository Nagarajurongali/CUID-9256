import React, { useState } from 'react'
import Comptwo from './Comptwo'

function Compone(props) {
    const name = 'Ramesh'
    const [count , setCount] = useState(0)
  return (
    <div style={{border:'2px solid',padding:'2%'}}>
        Compone
        <button onClick={()=>{setCount(count+1)}}>Cart</button>
        <Comptwo value = {count}/>
    </div>
  )
}

export default Compone