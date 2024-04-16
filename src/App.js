

import { Route, Routes } from 'react-router-dom'

import Login from './components/Login'

import Home from './components/Home'


import './App.css'

const App = () => <Routes>
    <Route exact path="/" element={<Login/>} />
    <Route exact path="/home" element={<Home/>} />


</Routes> 

export default App
