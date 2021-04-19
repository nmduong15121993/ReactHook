import React from 'react';

// import {UseStateHook} from "./Component/Hook-useState";
import {UseEffectHook} from "./Component/Hook-useEffect";
// import {UseReducer} from "./Component/Hook-useReducer";
// import {UseContext} from "./Component/Hook-useContext";


const App = () => {

  const [toggle, setToggle] = React.useState(false);

  return (
    <div>
      <h1>React Hook</h1>
      <button
        onClick={() => setToggle(!toggle)}
      >
        Click
      </button>
      {/* <UseStateHook />
      <hr/> */}
      <UseEffectHook />
      {/* <hr/>
      <UseReducer />
      <hr/>
      <UseContext /> */}
      
    </div>
  )
}

export default App;
