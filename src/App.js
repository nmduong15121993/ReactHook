import React from 'react';

// import {UseStateHook} from "./Component/Hook-useState";
// import {UseEffectHook} from "./Component/Hook-useEffect";
// import {UseReducer} from "./Component/Hook-useReducer";
// import {UseContext} from "./Component/Hook-useContext";
// import {UseContextTest} from "./Component/Hook-useContext";
// import{EXuseContext} from "./Component/Hook-useContext/EXuseContext";

import {UseReducerUseContext} from "./Component/useReducer-useContext";


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
      {/* <UseEffectHook /> */}
      {/* <hr/>
      <UseReducer /> */}
      {/* <hr/>
      <UseContextTest />
      <EXuseContext /> */}

      <UseReducerUseContext />

    </div>
  )
}

export default App;
