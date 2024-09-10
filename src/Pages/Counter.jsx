import React, { useState } from 'react'

function Counter() {
    const [count , setCount] = useState(0)
  return (
    <div>
        {count}
        <button onClick={()=>{setCount(count+1)}}>click</button>
    </div>
  )
}

export default Counter