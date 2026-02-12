import React from 'react'
import { BrowserRouter,Routes,Route }  from 'react-router-dom'
import Layout from './Component/Layout'
import Home from './Pages/Home'
import Leads from './Pages/Leads'
import AddLead from './Pages/AddLead'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes >
        <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/leads' element={<Leads/>}/>
      <Route path='/addlead' element={<AddLead/>}/>
      </Route>

      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
