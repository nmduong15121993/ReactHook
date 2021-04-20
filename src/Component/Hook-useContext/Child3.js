import React from 'react'
import {StoreContext} from "./Store";


const Child3 = () => {

  return (
    <StoreContext.Consumer>
      {(store) => {
        return (
          <div>
            <div>{store.theme1}</div>
            <div>{store.theme2}</div>
          </div>

        )
      }}
    </StoreContext.Consumer>
  )
}

export {Child3}; 
