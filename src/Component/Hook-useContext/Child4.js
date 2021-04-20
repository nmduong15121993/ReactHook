import React, { Component } from 'react'
import {StoreContext} from "./Store";

class Child4 extends Component {
  render() {
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
}

export {Child4};