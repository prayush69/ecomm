import { createContext } from "react";



export const cart=createContext()

export const Context=(children)=>{
    

    const state=79;
    return(

    
        <cart.Provider value={state}>
        {children}

        </cart.Provider>
    )
}

