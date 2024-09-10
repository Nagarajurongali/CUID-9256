import React from 'react'
import { productsData } from '../Data/Products'
import { useParams } from 'react-router-dom'


function SingleItem() {

  let {id} = useParams()
  let userId = productsData.find((e)=>e.id === id)

  return (
    <div>
      <img src={userId.image} alt="" />
      <p>{userId.id}</p>
      <p>{userId.name}</p>
      <p>{userId.Price}</p>
    </div>
  )
}

export default SingleItem