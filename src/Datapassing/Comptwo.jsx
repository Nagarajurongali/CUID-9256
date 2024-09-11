import React from 'react'
import Compthree from './Compthree'

function Comptwo(props) {
  return (
    <div style={{border:'2px solid',padding:'2%'}}>
        Comptwo
        
        <Compthree value={props.value} />
    </div>
  )
}

export default Comptwo