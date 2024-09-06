import React, { useEffect, useState } from 'react'

function Statistics() {
  const [Data , setData] = useState(0);

  useEffect(()=>{

    async function getData(){
      let responce = await fetch('https://dummyjson.com/products')
      let mydata = await responce.json();

      console.log(mydata.products)
      setData(mydata.products)
    }
    getData()


  })

  return (
    <div >
      {
        Data.map((e)=>{
          return(
            <div className='getdat'>
              <img src={e.images} alt="" />
              <p>{e.id}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Statistics