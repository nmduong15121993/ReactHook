import React, { useState } from 'react';

// store
import {StoreContext, themeInt} from "./Store";

// Component Display

import {Child2} from "./Child2";
import {Child3} from "./Child3";
import {Child4} from "./Child4";


const EXuseContext = () => {
  const [theme, setTheme] = useState(themeInt);
  
  return (
    <div>
      <StoreContext.Provider value={{theme, setTheme}}>
        <button 
          onClick={() => setTheme(theme.theme1 === 'light' 
          ? {...theme, theme1: "dark"}
          : {...theme, theme1: "light"}
          )}
        >
          Change Theme 1
        </button>

        <button 
          onClick={() => setTheme(theme.theme2 === 'light' 
          ? {...theme, theme2: "dark"}
          : {...theme, theme2: "light"}
          )}
        >
          Change Theme 2
        </button>

        <h1>Child  1</h1>
        <Child  />
        <h1>Child  2</h1>
        <Child2 />

        <h1>Test Consumer</h1>
        {
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
        }

        <h1>child 3</h1>
        <Child3 />

        <h1>Child  4</h1>
        <Child4 />

      </StoreContext.Provider>
    </div>
  );
}

const Child  = () => {
  const {theme} = React.useContext(StoreContext);
  return (
    <div>
      <div>{theme.theme1}</div>
      <div>{theme.theme2}</div>
    </div>

  )
};

export {EXuseContext};
