import React from 'react'
import Sidenav from './Sidenav'
import { Col, Row } from 'react-bootstrap'
import {productsData} from '../Data/Products'
import { Link } from 'react-router-dom'


function Dashboard() {
  const NewData = productsData.slice(0,3)
  return (
    <div >
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10} style={{padding:'5%'}}>
          <div className="dash maindata">
              {
               NewData.map((e)=>{
                return(
                  <div className='productdata'>
                    <img src={e.image} alt="" />
                    <p>{e.id}</p>
                    <p>{e.name}</p>
                    <p>{e.Price}</p>
                    </div>

                )


               })     
              }
              <Link to='/earbuds'> <p>View More</p> </Link> 
          </div>
        </Col>
      </Row>

    </div>
  )
}

export default Dashboard