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
import Storage from './Pages/Storage';
import Counter from './Pages/Counter';
import Compone from './Datapassing/Compone';
import CompA from './Usecontaxt/CompA';
function App() {
  return (
    <div className='container-fluid'>
      <Router>
        <Routes>
          <Route path='/CUID-9256' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/statistics' element={<Statistics />} />
          <Route path='/earbuds' element={<Earbuds />} />
          <Route path='/earbuds/:id' element={<SingleItem />} />
          <Route path='/storage' element={<Storage />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/props' element={<Compone />} />
          <Route path='/contaxt' element={<CompA />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App