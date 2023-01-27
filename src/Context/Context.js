import { createContext, useReducer } from "react";

export const cart=createContext();

export const Context =({children})=>{
    const reducer=(state,action)=>{
        switch(action.type)
        {
            case "ADD":
                const tempstate=state.filter((a)=>action.payload.id===a.id);
                if(tempstate.length > 0){
                return state;
               }
               else{
                return [...state, action.payload];
                }
                
                
            case "INCREASE":
                  const tempstate1=state.map((a)=>{
                    if(a.id === action.payload.id){  
                        return ({...a, quantity: a.quantity + 1 })
                       }
                       else
                    {
                        return a;

                     }
                  });

                return tempstate1;

            case "DECREASE":
                const tempstate2=state.map((a)=>{
                       if(a.id === action.payload.id){  
                        return( {...a, quantity: a.quantity-1})
                      
                         }
                    else
                      {
                         return a;
    
                      }
                   });
    
                 return tempstate2;    
               
            case "REMOVE":
                const tempstate3 = state.filter(
                 (a) => a.id !== action.payload.id
               );
           
               return tempstate3;     
                    
                
                    
            default:
                return state;
        }
    }
   
    const[state,dispatch]=useReducer(reducer,[])
    const info={state,dispatch}
    return(
        <cart.Provider value={info} >
        {(children)}

        </cart.Provider>
    
    )


}

