/* eslint-disable react/prop-types */


export default function FavouritePage({liked}) {

  return (
     <div 
    className="liked_container">
   
      <h2>liked</h2>
      {liked.map((item) =>{
        const{id,title,image,price} = item ;
        return (
           <div key={id}>
           <img src={image} alt="" />
           <h2>{title}</h2>
           <p>{price}</p>
           </div>
        )
      })}


    </div>
  )
}
