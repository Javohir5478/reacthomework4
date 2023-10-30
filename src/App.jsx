/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {Routes,Route, useNavigate} from "react-router-dom"


import HomePage from './pages/HomePage'
import SavatPage from  './pages/SavatPage'
import ProductsPage from  './pages/ProductsPage'
import FavouritePage from  './pages/FavouritePage'


import './App.css'
import Layout from "./components/layout/Layout"
import { useEffect, useState } from "react"
import getStore from "./utils/GetStore/getStore"
import { uid } from "uid"
import AddProduct from "./components/card/AddProduct"
import LoginPage from "./pages/Login/LoginPage"
import ProtectedPage from "./pages/Login/ProtectedPage"
// import AdminPage from "./pages/Login/AdminPage"





function App() {

 const [list,setList] = useState(getStore("list"));
//  const [user, setUser] = useState(getStore("user"))
  // const[title, setTitle] = useState('');
  const [price,setPrice] = useState('');
  const[name,setName] = useState ('');
  const navigate = useNavigate();
 
  const [liked,setLiked] = useState(getStore("liked"));
  const [basket,setBasket] = useState(getStore("basket"));

  const id = uid();
  const image= "https://loremflickr.com/640/480/food";


//  const handleSubmit = (e) =>{
//   e.preventDefault();
//   const newItem={name:user};
//   setUser([...user,newItem]);
//   if (user) {
//     return navigate("/protected");
//   }

//  }

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
  // localStorage.setItem("user", JSON.stringify(user))

 },[liked, basket,list]); //user
 

  return (
    <>
    {/* <HomePage/> */}
      <Routes>
        <Route>
 
          <Route path="/login" element={<LoginPage />}/>

{/* 
             <Route path="/admin" element={
              <ProtectedPage user={user}>
                <AdminPage/>
              </ProtectedPage>
             }/> */}

          
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
             <Route path="protected" element={<ProtectedPage/>}/>
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
