import React, { Component } from 'react'

import {StoreContext} from "./Store";

class Child2 extends Component {
  render() {
    const {theme, setTheme}  =  this.context;
    return (
      <div>
        <div>{theme.theme1}</div>
        <div>{theme.theme2}</div>

        <button
          onClick={() => setTheme(theme.theme1 === "dark" 
          ? {...theme, theme1: "light"}
          : {...theme, theme1: "dark"}
        )}
        >
          Change Theme 1
        </button>

        <button
          onClick={() => setTheme(theme.theme2 === "dark"
          ? {...theme, theme2: "light"}
          : {...theme, theme2: "dark"}
          )}
        >
          Change Theme 2
        </button>

      </div>
    )
  }
}

Child2.contextType = StoreContext;
export {Child2} ;