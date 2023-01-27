import React, { useContext, useEffect, useState } from 'react'
import '../styles/shop.scss'
import Context, { cart } from '../Context/Context'
const Shop = () => {


const[value,setValue]=useState("Here")

 const fetchData=()=>{

    fetch("https://fakestoreapi.com/products")
    .then(response=>response.json())
    .then(data=>{
      console.log(data);

      const p=data.map((a)=>{
        a.quantity=1

        return(
      <div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={a.image} alt="Mountain" />
            <div className="px-6 py-4">
              <div id="title" className="font-bold text-xl mb-2">{a.title}</div>
              <p className="text-gray-700 text-base">
                {a.category}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <a className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" href=''>Price {a.price}$</a>

              <button className='button' onClick={()=>dispatch({type:'ADD',payload:a})} >Add to cart</button>
            </div>

          </div>
       </div>
        )
      

      console.log(p)  
      })
      setValue(p)




    })









  }

  const GlobalState=useContext(cart)
  const dispatch=GlobalState.dispatch
  console.log(GlobalState);
useEffect(()=>{
  fetchData()
},[])  










  return (

    <div className="shop">
      <h1>My Shopping List</h1>
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

      {value}

      </div>
    </div>

  )
}

export default Shop




    