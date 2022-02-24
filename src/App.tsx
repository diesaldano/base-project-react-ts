import * as React from 'react';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './containers/home/Home'
import routes from './routes';
import { Consumer } from './context/Context'


export default function App() {
  let path = [...routes]
  return (
    <>
    <Header/>
    <div className="flex flex-row w-|100">
      <Navbar />
      <Routes>
        { 
          path.map((route, index) => (
            <Route 
              key={index}
              path={route.path} 
              element={ <route.main/> } />
          ))
        }
      </Routes>
    </div>
    </>
  )
}
 