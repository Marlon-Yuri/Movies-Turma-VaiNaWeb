import React, { Component } from 'react'
import Shows from './pages/Shows'
import Movies from './pages/Movies'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


export default class App extends Component {

  render() {
    return (
      <Router>
         
         <div style={{display:'flex', justifyContent: 'space-evenly'}}>
          <Link to='/'><h3>HOME PAGE</h3></Link>
          <Link to='/movies'><h3>MOVIES</h3></Link>
          <Link to='/shows'><h3>SERIADOS</h3></Link>
         </div>
           
           <Routes>
            <Route path='/shows' element={<Shows/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/' element={<Home/>}/>
           </Routes>
      </Router>
    )
  }
}
