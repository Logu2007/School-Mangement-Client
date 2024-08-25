import React from 'react'
import School from './Components/School'
import {BrowserRouter as Router,Routes,Route, Link}from 'react-router-dom'
import Class from './Components/Class'
import Section from './Components/Section'
import Teacher from './Components/Teacher'
import Subject from './Components/Subject'
import Group from './Components/Group'

const Root = () => {
  return (
<>
<Router>
    <Routes>
        <Route path='/school'element={<School/>}/>
        <Route path='/class'element={<Class/>}/>
        <Route path='/section'element={<Section/>}/>
        <Route path='/teacher'element={<Teacher/>}/>
        <Route path='/subject'element={<Subject/>}/>
        <Route path='/group'element={<Group/>}/>




    </Routes>
    <div style={{position:'fixed',top:'0%'}}>
<h1>Links</h1>
<h3><Link to='/school'style={{textDecoration:"none"}}>School Master</Link></h3>
<h3><Link to='/class'style={{textDecoration:"none"}}>Class Master</Link></h3>
<h3><Link to='/section'style={{textDecoration:"none"}}>Section Master</Link></h3>
<h3><Link to='/teacher'style={{textDecoration:"none"}}>Teacher Master</Link></h3>
<h3><Link to='/subject'style={{textDecoration:"none"}}>Subject Master</Link></h3>
<h3><Link to='/group'style={{textDecoration:"none"}}>Group Master</Link></h3>



</div>
</Router>

</>
)
}

export default Root