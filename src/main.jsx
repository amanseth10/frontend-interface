import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Info from './pages/Info.jsx'
import AddEntry from './pages/AddEntry.jsx'
import UpdateEntry from './pages/UpdateEntry.jsx'
// import './index.css'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/info' element={<Info/>}/>
      <Route path='/create' element={<AddEntry/>}/>
      <Route path='/update/:id' element={<UpdateEntry/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
