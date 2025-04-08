import {useState} from "react";
export default function App1(){
    //const[user,setUser]=useState({});
    const[products,setProducts]=useState([]);
    const[product,setProduct]=useState([]);
   const[price,setPrice]=useState();
   const[quantity,setQuantity]=useState();

    return(
        <div>
   <h3>This is App6</h3>
   <p><input type="text" placeholder="Product Name" onChange={(e)=>setProductName(e.target.value)}></input></p>
            <p><input type="number" placeholder="Price" onChange={(e)=>setPrice(e.target.value)}></input></p>
            <p><input type="number" placeholder="Quantity" onChange={(e)=>setQuantity(e.target.value)}></input></p>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
  
}