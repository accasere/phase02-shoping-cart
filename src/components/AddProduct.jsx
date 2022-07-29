import React, {useState} from 'react'



export default function AddProduct() {


  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')


  function saveData(){
    let newData={title,price,description,image}
    console.log(newData)
    fetch('http://localhost:8000/products',{
      method: 'POST',
      headers: { 
        'Accept' : 'aplication/json',
        'Content-Type' : 'aplication/json'},        
      body: JSON.stringify(newData)      
    }).then((resp)=>{
      console.log(resp)
    })
  }
  
  return (
    <div>
      <form>
      
        <div>
          <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title'/>
        </div>
        <div>
          <input type="text" name="price" value={price}onChange={(e) => setPrice(e.target.value)} placeholder='price'/>
        </div>
        <div>
          <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}placeholder='description'/>
        </div>
        <div>
          <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} placeholder='image'/>
        </div>
        <div>
          <button type="button" onClick={saveData}> Save new Product</button>
        </div>
      </form>
      
    </div>
  )
}
