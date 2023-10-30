/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {Routes,Route} from "react-router-dom"


import HomePage from './pages/HomePage'
import SavatPage from  './pages/SavatPage'
import ProductsPage from  './pages/ProductsPage'
import FavouritePage from  './pages/FavouritePage'


import './App.css'
import Layout from "./components/layout/Layout"
import LoginPage from "./pages/LoginPage"
import { useEffect, useState } from "react"
import getStore from "./utils/GetStore/getStore"
import { uid } from "uid"
import AddProduct from "./components/card/AddProduct"





function App() {

 const [list,setList] = useState(getStore("list"));
  // const[title, setTitle] = useState('');
  const [price,setPrice] = useState('');
  const[name,setName] = useState ('');
 
  const [liked,setLiked] = useState(getStore("liked"));
  const [basket,setBasket] = useState(getStore("basket"));

  const id = uid();
  const image= "https://loremflickr.com/640/480/food";




function handleAdd (e) {
    e.preventDefault();
    if (!name) {
      alert("error")
    } else {
      const newItem ={
        id:id,
        title:name,
        price:price,
        image:image
      }
      setList([...list,newItem]);
      setName('');
      setPrice('');
    }
  }



  const handleLiked =(id) => {
  const newItem = list.find((item) => item.id===id);
  setLiked([...liked,newItem]);
}
const handleBasket =(id) => {
  const newItem = list.find((item) => item.id===id);
  setBasket([...basket,newItem]);
}



   
 useEffect(() =>  {
  localStorage.setItem("liked", JSON.stringify(liked))
  localStorage.setItem("basket", JSON.stringify(basket))
  localStorage.setItem("list", JSON.stringify(list))
 },[liked, basket,list]);
 

  return (
    <>
    {/* <HomePage/> */}
      <Routes>
        <Route>
 
          <Route path="/login" element={<LoginPage/>}/>
          
          <Route  path="/"  element={<Layout/>}>
             
             
             <Route path="add" element={
             <AddProduct   
              name={name}
              setName={setName}
              price={price}
              setPrice={setPrice}
              handleAdd={handleAdd}

             />}/>

            <Route path="" element={<HomePage/>}/>
            <Route path="products" element={
            <ProductsPage 
                list={list}
                handleBasket={handleBasket}
                handleLiked={handleLiked}
              />}/>

              

             <Route path="" element={<HomePage/>}/>
             <Route path="savat" element={<SavatPage basket={basket}/>}/>
             <Route path="fav" element={<FavouritePage liked={liked}/>}/>


             </Route>
        </Route>
      </Routes>
      {/* <h1>salom</h1> */}
   
    </>
  )
}

export default App
