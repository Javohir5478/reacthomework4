/* eslint-disable react/prop-types */
import AddProduct from "../components/card/AddProduct";

import "./HomePage.scss"

export default function ProductsPage({list,handleBasket,handleLiked,handleDelete}) {



  



  
  return (

<div>
  <AddProduct/>

  <h2>all products</h2>
      {list.map((item) =>{
       
        return (
           <div className="products_container" key={item.id}>
           <img src={item.image} alt="" />
           <h2>{item.title}</h2>
           <p>{item.price}</p>
           <button className="btn_add" onClick={() => handleBasket(item.id)}>basket</button>
            <button className="btn_add" onClick={() => handleLiked(item.id)}>liked</button>
            <button className="btn_add" onClick={() => handleDelete(item.id)}>delete</button>





            <button className="btn_add" onClick={() => handleEdit(item.id)}   >
       edit
      </button>
       
           </div>
        )
      })}
</div>

  
  )
}



 