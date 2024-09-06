import React from 'react'
import {productsData} from '../Data/Products'
import { Link } from 'react-router-dom'

function Earbuds() {
  return (
    <div className='maindata'>
        {
            productsData.map((e)=>{
                return(
                    
                    <div className='productdata'>
                    <Link to={`/earbuds/${e.id}`}>
                        <img src={e.image} alt="" />
                        <p>{e.id}</p>
                        <p>{e.name}</p>
                        <p>{e.Price}</p>
                    </Link>
                    </div>
                    
                )
                
            })
        }
    </div>
  )
}

export default Earbuds