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
                        
                        <p>Brand Name:{e.name}</p>
                        
                    </Link>
                    </div>
                    
                )
                
            })
        }
    </div>
  )
}

export default Earbuds