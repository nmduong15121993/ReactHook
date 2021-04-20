import React, { createContext } from 'react'

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      }
    
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      }
  
    default:
      throw new Error();
  }
}

const initCount = { count: 1 };

const CountContext = createContext(initCount);

// component display
const ShowCount = () => {
  const {state} = React.useContext(CountContext);

  return (
    <div>
      <h1> Số đếm: {state.count} </h1>
    </div>
  )
};

// component change
const ChangeCount = () => {
  const {dispath} = React.useContext(CountContext);

  return (
    <div>
      <button onClick={() => dispath({type: "INCREMENT"})}>
        Increase Count
      </button>

      <button onClick={() => dispath({type: "DECREMENT"})}>
        Decrease Count
      </button>

    </div>
  )
};

const UseReducerUseContext = () => {

  const [state, dispath] = React.useReducer(countReducer, initCount);

  return (
    <div>
      <h1>useReducer + useContext</h1>
      <CountContext.Provider value={{state, dispath}}>
        <ShowCount />
        <ChangeCount />
      </CountContext.Provider>
    </div>
  )
}

export {UseReducerUseContext};

