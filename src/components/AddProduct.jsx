import React, { useEffect, useState } from 'react'
function AddProduct() {
 
  const [id, setId] = useState("")
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")

function saveData()
{
  let newData={id,title,price,description,image}
// console.warn(data);
  fetch("http://localhost:8000/products", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(newData)
  }).then((resp)=>{
    // console.warn("resp",resp);;
    resp.json().then((result)=>{
      console.warn("result",result)
    })
  })
}
  return (
    <div className="container">
      <h3>Add new product </h3>  
      <input type="text" placeholder='Name of Product' name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}  /> <br /> <br />
      <input type="text" placeholder='Price of Product' name="price"  value={price} onChange={(e)=>{setPrice(e.target.value)}} /> <br /> <br />
      <input type="text" placeholder='Description of Product'name="description"  value={description} onChange={(e)=>{setDescription(e.target.value)}}/> <br /> <br />
      <input type="text" placeholder='URL of image product'name="image"  value={image} onChange={(e)=>{setImage(e.target.value)}}/> <br /> <br />
      <button type="button" onClick={saveData} >Add new Product</button>
    </div>
  );
}
export default AddProduct;