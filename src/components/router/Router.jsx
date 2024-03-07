import React from 'react'
import { Routes, Route,Navigate } from 'react-router-dom'

import AddCategory from "../../pages/AddCategory"
import AddTask from "../../pages/AddTask"
import Home from '../../pages/Home'

import NotFound from '../../pages/NotFound'

const Router = () => {
    return (
        <div>
            <Routes> 
                <Route path='/category' element={ <AddCategory/> }></Route>
                <Route path='/task' element={ <AddTask/> }></Route>
                <Route path='/' element={ <Home/> }></Route>
                <Route path='*' element={<Navigate to="/404" replace />}></Route>
                <Route path='/404' element={ <NotFound/> }></Route>
            </Routes>
        </div>
    )
}

export default Router
