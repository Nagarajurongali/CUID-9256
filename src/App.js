import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login'
import Signup from './Components/Signup'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Statistics from './Components/Statistics';
import Earbuds from './Pages/Earbuds';
import SingleItem from './Pages/SingleItem';
function App() {
  return (
    <div className='container-fluid'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/statistics' element={<Statistics />} />
          <Route path='/earbuds' element={<Earbuds />} />
          <Route path='/earbuds/:id' element={<SingleItem />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App