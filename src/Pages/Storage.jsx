import React from 'react'

function Storage() {
localStorage.setItem('name' , 'ramesh')
sessionStorage.setItem('name' , 'suresh')
  return (
    <div>
        <h1>LocalStorage : {localStorage.getItem('name')}</h1>
        <h1>SessionStorage : {sessionStorage.getItem('name')}</h1>
    </div>
  )
}

export default Storage