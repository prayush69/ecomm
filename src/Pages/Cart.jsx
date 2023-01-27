import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context/Context'
import '../styles/cart.css'
import { cart } from '../Context/Context'

const Cart = () => {
 
  const GlobalState=useContext(cart)
  const state=GlobalState.state
  const dispatch=GlobalState.dispatch

  const total=state.reduce((total,a)=>{
   return total+a.price * a.quantity;
  },0);


  
  return (
    <div className='cart'>
      {state.map((a,index)=>{
        {/* a.quantity=1 */}
        return (
          <div className="card" key={index}>
          <img src={a.image} alt="" />
          <p>{a.title}</p>
          {/* <p>{a.quantity}</p> */}
          <p>{a.quantity*a.price}$</p>


          <div className="quantity">
            <button onClick={()=>dispatch({type:"INCREASE",payload:a})}>+</button>
            <p>{a.quantity}</p>
            <button onClick={()=>{
              if(a.quantity>1){
                dispatch({type:"DECREASE",payload:a})
              }else{
                dispatch({type:"REMOVE",payload:a})
              }
            }}>-</button>

          </div>

          <h2 id='h2' onClick={()=>dispatch({type:"REMOVE",payload:a})}>x</h2>








          </div>
        );


      })}

      {state.length > 0 && (
        <div className="total">
          <h2>{total}</h2>
        </div>
      )}
      
    

    
    </div>
  );
};

export default Cart;
