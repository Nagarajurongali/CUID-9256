import React from 'react'
import {useContaxt} from './CompA'
function CompC() {
  return (
    <div style={{border:'2px solid',padding:'2%'}}>
        CompC
        <useContaxt.Consumer>
            {value=><div>{value}</div>}
        </useContaxt.Consumer>
    </div>
  )
}

export default CompC