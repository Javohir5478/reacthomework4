/* eslint-disable react/prop-types */
import AddProduct from "../components/card/AddProduct";

export default function ProductsPage({list,handleBasket,handleLiked}) {
  
  return (

<div>
  <AddProduct/>

  <h2>all products</h2>
      {list.map((item) =>{
       
        return (
           <div key={item.id}>
           <img src={item.image} alt="" />
           <h2>{item.title}</h2>
           <p>{item.price}</p>
           <button onClick={() => handleBasket(item.id)}>basket</button>
            <button onClick={() => handleLiked(item.id)}>liked</button>
           </div>
        )
      })}
</div>
  
  )
}
