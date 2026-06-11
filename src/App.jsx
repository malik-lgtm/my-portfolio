import react from 'react'
import { Route, Routes} from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Layout from './layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import './App.css'

import React from 'react'

const App = () => {
  return (
<Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>} />
    <Route path='/' element={<Layout/>} />
    <Route path='projects' element={<Projects/>}/>
      <Route path='about' element={<About />} />
<Route path='contact' element={<Contact/>} />
<Route path='skills' element={<Skills/>} />
</Route>
</Routes>
  )
}

export default App