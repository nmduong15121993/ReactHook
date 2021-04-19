import React, { useReducer } from 'react';


/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        count: state.count + 1
      };

    case "DECREASE":
      return {
        ...state,
        count: state.count - 1
      };
  
    default:
      throw new Error();
  }
};

const UseReducer = () => {
  
  const [state, dispatch] = useReducer(countReducer, { count: 0 })

  const handleClickIncrease = () => {
    dispatch({type: "INCREASE"});
  }

  const handleClickDeCrease = () => {
    dispatch({type: "DECREASE"});
  }

  return (
    <div>
      <h1>Reducer</h1>

      <h2>Số Count : {state.count} </h2>

      <div>
        <button onClick={handleClickIncrease}>
          Increase + 
        </button>
        <button 
          style={{marginLeft: "5px"}} 
          onClick={handleClickDeCrease}
        >
          DeCrease - 
        </button>
      </div>

    </div>
  )
}

export {UseReducer};
