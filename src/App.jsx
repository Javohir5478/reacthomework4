import {Routes,Route} from "react-router-dom"

import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import HomePage from './pages/HomePage'
import SavatPage from  './pages/SavatPage'
import ProductsPage from  './pages/ProductsPage'
import FavouritePage from  './pages/FavouritePage'


import './App.css'
import Layout from "./components/layout/Layout"



function App() {

  return (
    <>
    <HomePage/>
      <Routes>
        <Route  element={<Layout/>}>
          <Route path="/" element={<HomePage/>}/>
           <Route path="/fav" element={<FavouritePage/>}/>
            <Route path="/products" element={<ProductsPage/>}/>
             <Route path="/savat" element={<SavatPage/>}/>
        </Route>
      </Routes>
      {/* <h1>salom</h1> */}
   
    </>
  )
}

export default App
