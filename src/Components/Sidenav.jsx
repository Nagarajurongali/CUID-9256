import React from 'react'
import Img from '../Assets/men.jpg'
import { Link } from 'react-router-dom'
function Sidenav() {
  return (
    <div className='sidenav'>
        <p>Hello</p>
        <img src={Img} alt="" style={{width:'100px'}} />
        <ul>
            <Link to='/dashboard'><li>Dashboard</li></Link>
            <Link to='/statistics'><li>Statistics</li></Link>
            <Link to='/payments'><li>Payments</li></Link>
            <Link to='/billings'><li>Billings</li></Link>
        </ul>
        <Link to='/'> <p>Logout</p></Link>
    </div>
  )
}

export default Sidenav