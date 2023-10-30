/* eslint-disable react/prop-types */

export default function AddProduct({
  handleAdd,
  name,
  price,
  setPrice,
  setName

}){


  return (
      <div className="container">
        <form action="" onSubmit={handleAdd}>

  <label htmlFor="title">title</label>
  <br />
  <input 
  id="title"
  name="title"
  type="text"
  value={name}
  onChange={(e)=> setName(e.target.value)}
  />
  <br />
  <label htmlFor="price">price</label>
  <br />
  <input
   type="number"
    name="price" 
    id="price"
    value={price}
    onChange={(e)=> setPrice(e.target.value)}
    />
<br />
<br />
  <button className="add_card" >add</button>

        </form>
        </div>
  )
}
