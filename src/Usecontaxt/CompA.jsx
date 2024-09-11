import React, { createContext, useState } from 'react'
import CompC from './CompC'

export const useContaxt = createContext()


function CompA() {
    const [count , setCount] = useState(0)
  return (
    <div style={{border:'2px solid',padding:'2%'}}>
        CompA
        <button onClick={()=>setCount(count+1)}>cart</button>
        <useContaxt.Provider value={count}>
            <CompC />
        </useContaxt.Provider>
    </div>
  )
}

export default CompA